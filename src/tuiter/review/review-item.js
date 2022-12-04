import React from "react";
import {useDispatch} from "react-redux";
import {deleteReviewThunk} from "../services/review-service/reviews-thunks";

const ReviewItem = (
    {
        review = {
            "gameName": "Space",
            "userId": "SpaceX",
            "userName": "SpaceX",
            "time": "",
            "playhours" : "10",
            "avatar": "spacex.jpeg",
            "score": 9,
            "recommended": true,
            "content": "I enjoy this game a lot",
            "RawgId" : 3489
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteReviewHandler = (ReviewId) => {
        dispatch(deleteReviewThunk(ReviewId));
    }

    let IsRecommendedImage = "/images/thumbdown.png";
    let IsRecommended = "Not Recommended";
    if(review.recommended === true)
    {
        IsRecommendedImage = "/images/thumbup.png";
        IsRecommended = "Recommended";
    }

    return (
        <li key={review._id} className="list-group-item">
            <div className="row">
                {/*left-part avatar*/}
                <div className="col-1 p-1">
                    <img className="rounded-circle" src={"/images/" + review.avatar} width="50px"/>
                </div>
                {/* right-part post */}
                <div className="col-11">
                    {/* user */}
                    <div className="d-flex justify-content-between ps-3">
                        <div>
                            <div>
                                <span className="fw-bolder">{review.userName}</span>
                                <div className="text-dark">{'posted: ' + review.time}</div>
                            </div>
                        </div>
                        <i className="bi bi-x-lg"
                           onClick={() => deleteReviewHandler(review._id)}/>
                    </div>

                    <div className = "game-title-padding "></div>
                    <div className="row">
                        <div className="col-1 d-none d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block ps-3">
                            <img className="rounded-circle ps-2" src={IsRecommendedImage} width="50px"/>
                        </div>
                        <div className="col-1">
                        </div>
                        <div className="col-4 ps-2">
                            <div className="fw-bolder">{IsRecommended}</div>
                            <div >Played {review.playhours} hrs</div>
                        </div>
                    </div>
                    <div className = "game-title-padding"></div>

                    <div className="ps-2 pt-2 text-dark">
                        {review.content}
                    </div>
                    <div className="ps-2 pt-2">
                    </div>
                    <div className="ps-2 pt-2 text-warning">
                        User Rating: {review.score}
                    </div>

                </div>
            </div>
        </li>
    );
};
export default ReviewItem;
