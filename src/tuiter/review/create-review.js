import React, {useState, useEffect} from "react";
import {Link, useLocation, useNavigate  } from "react-router-dom";
import {useDispatch} from "react-redux";
import * as security_service from "../services/security-service";
import "./index.css"
import {createReview} from "../services/review-service/reviews-service";
import * as secureService from "../services/security-service";
import * as tuitService from "../services/tuits-service";

const CreateReview = () => {

    let ReviewLocation = useLocation();
    const Image = ReviewLocation.state.Image;
    const RawgId = ReviewLocation.state.RawgId;
    const GameName = ReviewLocation.state.GameName;

    const [GamePlayScore, setGamePlayScore] = useState(0);
    const [LastingAppealScore, setLastingAppealScore] = useState(0);
    const [GraphicScore, setGraphicScore] = useState(0);
    const [content, setcontent] = useState('');
    const [recommended, setrecommended] = useState(true);
    const [playhours, setplayhours] = useState(0);
    const [username, setusername] = useState('');
    const [userId, setuserId] = useState('');


    const navigate = useNavigate();

    // retrieve the currently logged in user
    useEffect(() => {
            async function fetchUser() {


                const user = await security_service.profile();
                if (Object.keys(user).length === 0)
                {
                    navigate('/tuiter/login');
                }

                await setusername(user.username);
                await setuserId(user._id);
                // } catch (e) {
                //     navigate("../login");
                // }
            }
        fetchUser();
        }, []
    );




   async function handleRecommendedChange(e)
   {
       const IsRecommended = e.target.value;
       setrecommended(IsRecommended)
   }

    async function handleGamePlayScoreChange(e)
    {
        const newScore = e.target.value;
        setGamePlayScore(newScore)
    }

    async function handleLastingAppealScoreChange(e)
    {
        const newScore = e.target.value;
        setLastingAppealScore(newScore)
    }

    async function handleGraphicScoreChange(e)
    {
        const newScore = e.target.value;
        setGraphicScore(newScore)
    }


    const dispatch = useDispatch();
    const PostReviewHandler = () => {
        const date = new Date();
        createReview({
            "userId": userId,
            "userName": username,
            "time": date.toLocaleDateString()+ " " + date.toLocaleTimeString(),
            "playhours" : playhours,
            "avatar": "spacex.jpeg",
            "GamePlayScore": GamePlayScore,
            "LastingAppealScore": LastingAppealScore,
            "GraphicScore": GraphicScore,
            "recommended": recommended,
            "content": content,
            "RawgId" : RawgId
        })
    }

    return (
        <div className="ttr-edit-profile">
            <div className="border border-secondary border-bottom-0" style={{"marginBottom": "60px"}}>
                <Link to={{pathname :"/tuiter/game/:" + RawgId}} state = {{"RawgId" : RawgId, "GameName" : GameName}}  className="btn btn-light rounded-pill fa-pull-left fw-bolder mt-2 mb-2 ms-2">
                    <i className="fa-solid fa-xmark"/>
                </Link>

                <h5 className="p-3 mb-0 fw-bolder">Review {GameName}</h5>
                <div className="position-relative">
                    <img className="w-100" src={Image} height='300px' style={{"filter": "brightness(50%)"}}/>


                    <div className="position-absolute top-100 translate-middle" style={{'paddingLeft': '150px'}}>
                        <img className="rounded-circle"
                             style={{"width": "100px", "filter": "brightness(50%)"}}
                             src={"/images/spacex.jpeg"}/>
                    </div>


                </div>


            </div>

            <h6 className="p-3 mb-2 fw-bolder">Hi {username}! Thank you for sharing your game experience with {GameName}.</h6>
            <form className="p-2">
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="username">Your Review</label>
                    <textarea id="content" title="Username"
                           className="p-0 form-control border-0 p-2"
                           placeholder="Type your review" value={content}
                           onChange={(event) => setcontent(event.target.value)}
                    />
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="bio">Do you Recommend the game?</label>
                    <select value={recommended} onChange={handleRecommendedChange}
                        id="recommended"
                        className="p-0 form-control border-0 p-2">
                        <option value={true} >Recommended</option>
                        <option value={false} >Not Recommended</option>
                    </select>
                </div>

                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="location">How many hours have you played?</label>
                    <input id="playhours"
                           className="p-0 form-control border-0 p-2"
                           placeholder="hours played"
                           value={playhours}
                           onChange={(event) => setplayhours(event.target.value)}
                    />
                </div>

                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label>Gameplay Rating</label>
                    <select
                        id="GamePlayScore"
                        className="p-0 form-control border-0 p-2"
                        value={GamePlayScore} onChange={handleGamePlayScoreChange}>
                        <option value= {0} >0</option>
                        <option value= {1} >1</option>
                        <option value= {2} >2</option>
                        <option value= {3} >3</option>
                        <option value= {4} >4</option>
                        <option value= {5} >5</option>
                        <option value= {6} >6</option>
                        <option value= {7} >7</option>
                        <option value= {8} >8</option>
                        <option value= {9} >9</option>
                        <option value= {10} >10</option>
                    </select>
                </div>

                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label>LastAppeal Rating</label>
                    <select
                        id="LastingAppealScore"
                        className="p-0 form-control border-0 p-2"
                        value={LastingAppealScore} onChange={handleLastingAppealScoreChange}>
                        <option value= {0} >0</option>
                        <option value= {1} >1</option>
                        <option value= {2} >2</option>
                        <option value= {3} >3</option>
                        <option value= {4} >4</option>
                        <option value= {5} >5</option>
                        <option value= {6} >6</option>
                        <option value= {7} >7</option>
                        <option value= {8} >8</option>
                        <option value= {9} >9</option>
                        <option value= {10} >10</option>
                    </select>
                </div>

                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label>Graphic Rating</label>
                    <select
                        id="GraphicScore"
                        className="p-0 form-control border-0 p-2"
                        value={GraphicScore} onChange={handleGraphicScoreChange}>
                        <option value= {0} >0</option>
                        <option value= {1} >1</option>
                        <option value= {2} >2</option>
                        <option value= {3} >3</option>
                        <option value= {4} >4</option>
                        <option value= {5} >5</option>
                        <option value= {6} >6</option>
                        <option value= {7} >7</option>
                        <option value= {8} >8</option>
                        <option value= {9} >9</option>
                        <option value= {10} >10</option>
                    </select>
                </div>

                <Link to={{pathname :"/tuiter/game/:" + RawgId}} state = {{"RawgId" : RawgId, "GameName" : GameName}}  className="btn btn-light rounded-pill fa-pull-middle fw-bolder mt-1 mb-2 me-2"
                      onClick={PostReviewHandler}>
                    Post Your Review
                </Link>


            </form>
        </div>
    );
};
export default CreateReview;