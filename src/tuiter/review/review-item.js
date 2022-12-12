import "./index.css";
import {deleteReview} from "../services/review-service/reviews-service";
import {useEffect, useState} from "react";
import * as secureService from "../services/security-service";
import {Link} from "react-router-dom";


const ReviewItem = ({review, refreshReview}) => {
    const deleteReviewHandler = (ReviewId) => {
        deleteReview(ReviewId).then(refreshReview);
    }


    const [canDeleteReview, setcanDeleteReview] = useState(false);



    useEffect(() => {


        async function checkProfile() {

            const loginUser = await secureService.profile()
            if (Object.keys(loginUser).length !== 0 && (loginUser.accountType === 'TUITER-ADMIN' || review.postedBy.username === loginUser.username))
            {
                await setcanDeleteReview(true)
            }

        }

        checkProfile();
    }, []);



    let IsRecommendedImage = "/images/thumbdown.png";
    let IsRecommended = "Not Recommended";
    if(review.recommended === true)
    {
        IsRecommendedImage = "/images/thumbup.png";
        IsRecommended = "Recommended";
    }

    const overall_score = ((review.GraphicScore + review.LastingAppealScore + review.GamePlayScore)/3).toFixed(1);


    return (
        <li key={review._id} className="list-group-item border border-secondary">
            {review.GameComponent._id && (
              <Link to={`/tuiter/game/:${review.GameComponent.RawgId}`}>
                  <h4>Game: {review.GameComponent.GameName}</h4>
              </Link>
            )}
            <div className="row">
                {/*left-part avatar*/}
                <div className="col-1 p-1">
                    {review.postedBy.username ? <img className="rounded-circle" src={review.postedBy.avatar} width="50px"/> : <p>Loading</p>}
                </div>
                {/* right-part post */}
                <div className="col-11">
                    {/* user */}
                    <div className="d-flex justify-content-between ps-3">
                        <div>
                            <div>
                                <span className="fw-bolder">{review.postedBy.username}</span>
                                <div className="text-dark">{'posted: ' + review.time}</div>
                            </div>
                        </div>
                        {canDeleteReview &&
                        <i className="bi bi-x-lg"
                           onClick={() => deleteReviewHandler(review._id)}/>
                        }
                    </div>

                    <div className = "review-content-padding "></div>
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
                    <div className = "review-content-padding"></div>

                    <div className="ps-2 pt-2 text-dark wrap-text">
                        {review.content}
                    </div>
                    <div className="ps-2 pt-2">
                    </div>


                    <div className = "top-bottom-padding"></div>
                    <div className="row">

                        <div className="col-4">
                            <div className= {review.GamePlayScore >= 8 ? 'text-success circle' : review.GamePlayScore >= 5
                                ?  'text-warning circle' : 'text-danger circle'}>
                                <div className="center text-22">{review.GamePlayScore}</div>
                            </div>
                            <div className= {review.GamePlayScore >= 8 ? 'text-success gp-Score-center text-18' : review.GamePlayScore >= 5
                                ?  'text-warning gp-Score-center text-18' : 'text-danger gp-Score-center text-18'}>Gameplay
                                <div className= {review.GamePlayScore >= 8 ? 'text-success score-center-1' : review.GamePlayScore >= 5
                                    ?  'text-warning score-center-1' : 'text-danger score-center-1'}>
                                    {review.GamePlayScore}/10
                                </div>
                            </div>
                        </div>


                        <div  className="col-4">
                            <div className= {review.LastingAppealScore >= 8 ? 'text-success circle' : review.LastingAppealScore >= 5
                                ?  'text-warning circle' : 'text-danger circle'}>
                                <div className="center text-22">{review.LastingAppealScore}</div>
                            </div>
                            <div className= {review.LastingAppealScore >= 8 ? 'text-success la-Score-center text-18' : review.LastingAppealScore >= 5
                                ?  'text-warning la-Score-center text-18' : 'text-danger la-Score-center text-18'}>Last Appeal
                                <div className= {review.LastingAppealScore >= 8 ? 'text-success score-center-2' : review.LastingAppealScore >= 5
                                    ?  'text-warning score-center-2' : 'text-danger score-center-2'}>
                                    {review.LastingAppealScore}/10
                                </div>
                            </div>
                        </div>


                        <div  className="col-4">
                            <div className= {review.GraphicScore >= 8 ? 'text-success circle' : review.GraphicScore >= 5
                                ?  'text-warning circle' : 'text-danger circle'}>
                                <div className="center text-22">{review.GraphicScore}</div>
                            </div>
                            <div className= {review.GraphicScore >= 8 ? 'text-success g-Score-center text-18' : review.GraphicScore >= 5
                                    ?  'text-warning g-Score-center text-18' : 'text-danger g-Score-center text-18'}>Graphic
                                <div className= {review.GraphicScore >= 8 ? 'text-success score-center-3' : review.GraphicScore >= 5
                                    ?  'text-warning score-center-3' : 'text-danger score-center-3'}>
                                    {review.GraphicScore}/10
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="overall-review-padding">
                    </div>
                    <h5 className = {overall_score >= 8 ? 'text-success ps-2 pt-2 text-18' : overall_score >= 5
                                                                    ?  'text-warning ps-2 pt-2 text-18' : 'text-danger ps-2 pt-2 text-18'}>
                        Overall Rating:  {overall_score}/10.0
                    </h5>

                </div>
            </div>
        </li>

    );
};
export default ReviewItem;
