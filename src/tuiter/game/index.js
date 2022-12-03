import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {findGameByIdThunk} from "../services/game-service/games-thunks";
import GameArray from "./game.json";

const GameComponent = () => {

    let gameLocation = useLocation();
    let [game, setgame] = useState(GameArray);

    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(function(){
            ComponentInit()
        }, 300);
    }, [])

    useEffect(() => {
    }, [game])

    async function ComponentInit()
    {
        const RawgId = gameLocation.state.RawgId;
        let response = await dispatch(findGameByIdThunk(RawgId));
        console.log(RawgId)
        console.log(response)
        await setgame(response.payload);
    }


    return (
        <div className="ttr-profile" >
            <div className="border border-secondary ">

                <div className="btn-padding">
                    <button className="btn btn-light btn-lg rounded-pill ms-2 mt-3 " >
                        <Link to="/tuiter/search">
                            <i className="fa-solid fa-arrow-left fa-lg"/>
                        </Link>
                    </button>
                </div>
                <div className = "game-title-padding"></div>
                <div className="col-11">
                    <h3 className="p-2 mb-0 pb-0 fw-bolder">
                        {game.GameName}
                        <i className="fa fa-badge-check text-primary"/>
                    </h3>
                </div>
                <div className = "game-title-padding"></div>

                <div className="mb-5 position-relative">
                    <img className="w-100" src={game.Image} height='300px'/>
                    {/*className="position-relative"*/}
                    <div className="position-absolute top-100 translate-middle" style={{'paddingLeft':'150px'}}>

                    </div>
                    {/*<Link to="/tuiter/edit-profile"*/}
                    {/*      className="mt-2 me-2 btn btn-large btn-light border border-secondary fw-bolder rounded-pill fa-pull-right">*/}
                    {/*    Edit profile*/}
                    {/*</Link>*/}
                </div>

                <div className="p-2">
                    <h6 className="fw-bolder pb-0 mb-0">
                        Description:
                    </h6>
                    <p className="pt-2">
                        {game.Description}
                    </p>

                    <p>
                        <i className="fa-solid fa-link"/>
                        <a href={game.Website} title={game.Website} className="text-decoration-none ms-3" target="_blank" rel="noopener">Official Website</a>

                        <i className="fa-solid fa-cake-candles ms-5 me-3"/>
                        {"Release Date: " + game.ReleaseDate}

                    </p>

                    <h6> Genres:</h6>
                        <ul className="">
                            {
                                game.Genres.map(genre =>
                                    <li className="">
                                        {genre}
                                    </li>)
                            }
                        </ul>

                    <h6> Platforms:</h6>
                    <ul className="">
                        {
                            game.Platforms.map(platform =>
                                <li className="">
                                    {platform}
                                </li>)
                        }
                    </ul>

                    <h6> Developers:</h6>
                    <ul className="">
                        {
                            game.Developers.map(developer =>
                                <li className="">
                                    {developer}
                                </li>)
                        }
                    </ul>


                    <h6> Metacritic Score:</h6><b></b>
                    <b className="ms-2">{game.Metacritic}</b>

                </div>
            </div>

        </div>
    );

}
export default GameComponent;