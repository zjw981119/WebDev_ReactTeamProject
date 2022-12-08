import React, {useEffect, useState} from "react";
import "./index.css";
import {findGameDeals, findGameNews, findGameTrendingNews} from "../services/news-service/news-service";
import PostSummaryItem from "../post-summary-list/post-summary-item";
import {Pagination} from "antd";


const ExploreComponent = () => {

    let [newsArray, setnewsArray] = useState('');
    let [TabIndex, setTabIndex] = useState(0);

    async function TagSearchInputHandler() {
        //TODO
    }

    async function TrendingNewsHandler() {
        const response = await findGameTrendingNews();
        await setnewsArray(response.data);
        await setTabIndex(1);
    }

    async function ForYouGameDealHandler() {
        const response = await findGameDeals();
        await setnewsArray(response.data);
        await setTabIndex(0);
    }

    async function GameNewsHandler() {
        const response = await findGameNews();
        await setnewsArray(response.data);
        await setTabIndex(2);
    }

    useEffect(() => {
        ForYouGameDealHandler()
    }, []);



    useEffect(() => {
        setTotalPosts(newsArray.length)
    }, [newsArray]);

    function handleKeyPress(e) {
        if(e.keyCode === 13){
            TagSearchInputHandler()
        }
    }


    //Pageination
    const [postsPerPage] = useState(5);
    const [totalPosts, setTotalPosts] = useState()
    const [lastPost, setLastPost] = useState(postsPerPage - 1)
    const [firstPost, setFirstPost] = useState(0)
    // const [serverCall, setServerCall] = useState(false)

    const [pageAtServerCall, setPageAtServerCall] = useState([])

    useEffect(() => {
        const serverCallPage = []

        serverCallPage.push((20 / postsPerPage) + 1)
        for (var i = 0; i < (totalPosts / postsPerPage) - 1; i++) {
            if (serverCallPage.indexOf(serverCallPage[0] + i * (20 / postsPerPage)) === -1) {
                serverCallPage.push(serverCallPage[0] + i * (20 / postsPerPage))
            }
        }

        setPageAtServerCall(serverCallPage)

    }, [totalPosts, postsPerPage])


    const pageChangeHandler = (pageNumber) => {
        const indexOfLastPost = (pageNumber * postsPerPage) - 1
        const indexOfFirstPost = indexOfLastPost - postsPerPage + 1
        const index = pageAtServerCall.indexOf(pageNumber)


        if (index !== -1) {
            pageAtServerCall.splice(index, 1)
        }

        setFirstPost(indexOfFirstPost)
        setLastPost(indexOfLastPost)
    }


    return(
        <>
            <div className="row">

                <div className="col-11">
                    <div className="position-relative">
                        <i className="fa-solid fa-magnifying-glass ps-3 pt-2 position-absolute" style={{"color": "gray"}}></i>
                        <input className="form-control rounded-pill ps-5 border border-secondary"
                               placeholder="Search Tag"/>
                    </div>
                </div>

                {/*<div className="col-1 d-flex align-items-center">*/}
                {/*    <i className="fa fa-cog me-1" style={{"color": "deepskyblue"}}></i>*/}
                {/*</div>*/}

            </div>


            <ul className="nav nav-pills mt-2 mb-2">

                <li className="nav-item">
                    <button className={` nav-link ${TabIndex === 0 ?'active':''}`} onClick={ForYouGameDealHandler}>Deals For You</button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link ${TabIndex === 1 ?'active':''}`} onClick={TrendingNewsHandler}>Trending Now</button>
                </li>
                <li className="nav-item">
                    <button className={` nav-link ${TabIndex === 2 ?'active':''}`} onClick={GameNewsHandler}>News</button>
                </li>

            </ul>


            <div className="position-relative mb-2">
                {
                    newsArray ?
                    <img src={newsArray[Math.floor(Math.random() * (newsArray.length > 10 ? 10 : newsArray.length - 1)) + 1].photo_url} height={360} className="w-100"/> :
                    <img src="https://www.spieltimes.com/wp-content/uploads/2021/08/Unreal-Engine-5.png" height={360} className="w-100"/>
                }
            </div>


            {newsArray ?
            <ul className="list-group border border-secondary">
                {
                   newsArray.slice(firstPost, lastPost).map(news =>
                        <PostSummaryItem key={news._id} news={news}/>)
                }
            </ul>: <h5>Loading</h5>
            }

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Pagination className="pagination-color"
                            defaultCurrent={1}
                            total={totalPosts}
                            pageSize={postsPerPage}
                            onChange={pageChangeHandler}
                />
            </div>

        </>
    );
};
export default ExploreComponent;
