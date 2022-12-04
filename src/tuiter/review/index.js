import React, {useEffect} from "react";
import ReviewItem from "./review-item";
import {useDispatch, useSelector} from "react-redux";
import {findReviewByRawgIdThunk} from "../services/review-service/reviews-thunks";
import review from "../reducers/review-reducer";


const ReviewsList = ({RawgId}) => {

    const {reviews, loading} = useSelector(state => state.review)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findReviewByRawgIdThunk(RawgId))
    }, [])

    return (
        <>
            <ul className="list-group border border-secondary">
                {
                    // if loading flag is true, then show a loading message while data is still
                    // coming back from the server
                    loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }
                {
                    reviews.map(review =>
                        <ReviewItem key={review._id} review={review}/>)
                }
            </ul>
        </>
    );
};
export default ReviewsList;