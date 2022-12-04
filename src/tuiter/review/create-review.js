import React, {useState, useEffect} from "react";
import {Link, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {createReviewThunk} from "../services/review-service/reviews-thunks";

const CreateReview = () => {

    //TODO SETUP UserName and UserId

    let ReviewLocation = useLocation();
    const Image = ReviewLocation.state.Image;
    const RawgId = ReviewLocation.state.RawgId;
    const GameName = ReviewLocation.state.GameName;

    const [score, setscore] = useState(0);
    const [content, setcontent] = useState('');
    const [recommended, setrecommended] = useState(true);
    const [playhours, setplayhours] = useState(0);

    //TODO socre and recommended not updated by selection


    const dispatch = useDispatch();
    const PostReviewHandler = () => {
        const date = new Date();
        dispatch(createReviewThunk({
            "gameName": GameName,
            "userId": 1234,
            "userName": "TODO",
            "time": date.toLocaleDateString()+ " " + date.toLocaleTimeString(),
            "playhours" : playhours,
            "avatar": "spacex.jpeg",
            "score": score,
            "recommended": recommended,
            "content": content,
            "RawgId" : RawgId
        }))
    }

    return (
        <div className="ttr-edit-profile">
            <div className="border border-secondary border-bottom-0" style={{"marginBottom": "60px"}}>
                <Link to="/tuiter/profile" className="btn btn-light rounded-pill fa-pull-left fw-bolder mt-2 mb-2 ms-2">
                    <i className="fa-solid fa-xmark"/>
                </Link>

                <Link to={{pathname :"/tuiter/game"}} state = {{"RawgId" : RawgId, "GameName" : GameName}}  className="btn btn-dark rounded-pill fa-pull-right fw-bolder mt-2 mb-2 me-2"
                      onClick={PostReviewHandler}>
                    Post
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
            <form className="p-2">
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="username">Review</label>
                    <input id="content" title="Username"
                           className="p-0 form-control border-0 p-2"
                           placeholder="Review" value={content}
                           onChange={(event) => setcontent(event.target.value)}
                    />
                </div>
                <div className="border border-secondary rounded-3 p-2 mb-3">
                    <label htmlFor="bio">Do you Recommend the game?</label>
                    <select
                        id="recommended"
                        className="p-0 form-control border-0 p-2">
                        <option value={recommended} onSelect={(event) => setrecommended(true)}>Recommended</option>
                        <option value={recommended} onSelect={(event) => setrecommended(false)}>Not Recommended</option>
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
                    <label>Your Rating</label>
                    <select
                        id="score"
                        className="p-0 form-control border-0 p-2">
                        <option value= {score} onSelect={(event) => setscore(0)}>0</option>
                        <option value= {score} onSelect={(event) => setscore(1)}>1</option>
                        <option value= {score} onSelect={(event) => setscore(2)}>2</option>
                        <option value= {score} onSelect={(event) => setscore(3)}>3</option>
                        <option value= {score} onSelect={(event) => setscore(4)}>4</option>
                        <option value= {score} onSelect={(event) => setscore(5)}>5</option>
                        <option value= {score} onSelect={(event) => setscore(6)}>6</option>
                        <option value= {score} onSelect={(event) => setscore(7)}>7</option>
                        <option value= {score} onSelect={(event) => setscore(8)}>8</option>
                        <option value= {score} onSelect={(event) => setscore(9)}>9</option>
                        <option value= {score} onSelect={(event) => setscore(10)}>10</option>
                    </select>
                </div>

            </form>
        </div>
    );
};
export default CreateReview;