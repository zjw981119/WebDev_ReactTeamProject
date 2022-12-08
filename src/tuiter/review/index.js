import React, {useEffect, useState} from "react";
import ReviewItem from "./review-item";
import { Pagination } from 'antd';


const ReviewsList = ({reviews, refreshReview}) => {

    useEffect(() => {
        setTotalPosts(reviews.length)
    }, [reviews.length])


    //Pageination

    const [postsPerPage] = useState(2);
    const [totalPosts, setTotalPosts] = useState()
    const [lastPost, setLastPost] = useState(postsPerPage - 1)
    const [firstPost, setFirstPost] = useState(0)

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



    return (
        <>
            <ul className="list-group border ">
                {
                    reviews.slice(firstPost,lastPost +1).map(review =>
                        <ReviewItem key={review._id} review={review} refreshReview = {refreshReview}/>)
                }
            </ul>

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
export default ReviewsList;