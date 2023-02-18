import React, {useEffect, useState} from "react";
import "./index.css";
import {
    findGameDeals,
    findGameNews,
    findGameTrendingNews,
    findNewsByKeyWord
} from "../services/news-service/news-service";
import PostSummaryItem from "../post-summary-list/post-summary-item";
import {Pagination} from "antd";
import {Link} from "react-router-dom";



const ExploreComponent = () => {

    let [Input, setInput] = useState('');
    let [newsArray, setnewsArray] = useState('');
    let [TabIndex, setTabIndex] = useState(0);


    async function TrendingNewsHandler() {
        const response = await findGameTrendingNews();
        setnewsArray(response.data);
        setTabIndex(1);
    }

    async function ForYouGameDealHandler() {
        const response = await findGameDeals();
        setnewsArray(response.data);
        setTabIndex(0);
    }

    async function GameNewsHandler() {
        const response = await findGameNews();
        setnewsArray(response.data);
        setTabIndex(2);
    }

    useEffect(() => {
        ForYouGameDealHandler()
    }, []);


    //For pagination, when gamesArray changes, update total, pageNum and index
    useEffect(() => {
        setTotalPosts(newsArray.length)
        setCurPageNum(1);
        pageChangeHandler(1);
    }, [newsArray]);

    async function TagSearchInputHandler() {
        const response = await findNewsByKeyWord(Input);
        await setnewsArray(response.data);
    }

    function handleKeyPress(e) {
        if(e.keyCode === 13){
            TagSearchInputHandler()
        }
    }


    //Pagination
    const [postsPerPage] = useState(10);
    const [totalPosts, setTotalPosts] = useState()
    const [curPageNum, setCurPageNum] = useState(1)
    const [lastPost, setLastPost] = useState(postsPerPage - 1)
    const [firstPost, setFirstPost] = useState(0)

    // update when page number changes
    const pageChangeHandler = (pageNumber) => {
        const indexOfLastPost = (pageNumber * postsPerPage) - 1
        const indexOfFirstPost = indexOfLastPost - postsPerPage + 1
        setCurPageNum(pageNumber)
        setFirstPost(indexOfFirstPost)
        setLastPost(indexOfLastPost)
    }


    return(
        <>
            <div className="row">

                <div className="col-11">
                    <div className="position-relative">
                        <Link>
                            <i className="fa-solid fa-magnifying-glass ps-3 pt-2 position-absolute" style={{"color": "gray"}} onClick={TagSearchInputHandler}/>
                        </Link>
                        <input className="form-control rounded-pill ps-5 border border-secondary"
                               placeholder="Search News"  value = {Input}
                               onChange={(event) => setInput(event.target.value)} onKeyDown={handleKeyPress}/>
                    </div>
                </div>

            </div>


            <ul className="nav nav-pills mt-2 mb-2">

                <li className="nav-item">
                    <button className={` nav-link ${TabIndex === 0 ?'active':''}`} onClick={ForYouGameDealHandler}>Deals For You</button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link ${TabIndex === 1 ?'active':''}`} onClick={TrendingNewsHandler}>Release Trending</button>
                </li>
                <li className="nav-item">
                    <button className={` nav-link ${TabIndex === 2 ?'active':''}`} onClick={GameNewsHandler}>Game News</button>
                </li>

            </ul>


            {/* image display */}
            <div className="position-relative mb-2">
                {
                    newsArray ?
                    <img src={newsArray[Math.floor(Math.random() * (newsArray.length > 10 ? 10 : newsArray.length - 1)) + 1].photo_url} height={360} className="w-100" alt=''/> :
                    <img src="https://www.spieltimes.com/wp-content/uploads/2021/08/Unreal-Engine-5.png" height={360} className="w-100" alt=''/>
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

            <div className='d-flex justify-content-center'>
                {/* onChange called when the page number or pageSize is changed,
                and it takes the resulting page number and pageSize as its arguments*/}
                <Pagination className="pagination-color"
                            current={curPageNum}
                            total={totalPosts}
                            pageSize={postsPerPage}
                            showSizeChanger={false}
                            onChange={pageChangeHandler}/>
            </div>


        </>
    );
};
export default ExploreComponent;
