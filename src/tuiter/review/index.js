import React, {useEffect, useState} from "react";
import ReviewItem from "./review-item";
import {useDispatch, useSelector} from "react-redux";
import {findReviewByRawgIdThunk} from "../services/review-service/reviews-thunks";
import review from "../reducers/review-reducer";

import { Pagination } from 'antd';

const ReviewsList = ({RawgId}) => {

    const {reviews, loading} = useSelector(state => state.review)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findReviewByRawgIdThunk(RawgId))
    }, [])

    useEffect(() => {
        setTotalPosts(reviews.length)
    }, [reviews.length])


    //Pageination

    const [postsPerPage] = useState(2);
    const [totalPosts, setTotalPosts] = useState()
    const [lastPost, setLastPost] = useState(postsPerPage - 1)
    const [firstPost, setFirstPost] = useState(0)
    const [serverCall, setServerCall] = useState(false)

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

        pageAtServerCall.map((pageAtServerCall) => {
            if (pageNumber === pageAtServerCall) {
                setServerCall(true)
            }
        })

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
                    // if loading flag is true, then show a loading message while data is still
                    // coming back from the server
                    loading &&
                    <li className="list-group-item border-secondary">
                        Loading...
                    </li>
                }
                {
                    reviews.slice(firstPost,lastPost +1).map(review =>
                        <ReviewItem key={review._id} review={review}/>)
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