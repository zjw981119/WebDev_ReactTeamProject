import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {useDispatch} from "react-redux";
import {findGameByIdThunk, getGameTrailerUrlThunk, getGameMusicUrlThunk} from "../services/game-service/games-thunks";
import GameArray from "./game.json";
import ReviewsList from "../review/index";
import Collapsible from 'react-collapsible';

import Spotify from "react-spotify-embed";

const GameComponent = () => {

    let gameLocation = useLocation();
    let [game, setgame] = useState(GameArray);
    let [videoUrl, setvideoUrl] = useState('');
    let [musicUrl, setmusicUrl] = useState('https://open.spotify.com/');

    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(function(){
            try {
                ComponentInit()
            }
            catch{

            }
        }, 500);
    }, [])

    useEffect(() => {
    }, [game])

    useEffect(() => {
    }, [videoUrl])

    async function ComponentInit()
    {
        try{

            const RawgId = gameLocation.state.RawgId;
            let response = await dispatch(findGameByIdThunk(RawgId));
            await setgame(response.payload);

            //TODO Comment backup
            const GameName = gameLocation.state.GameName;
            let TrailerVideoResponse = await dispatch(getGameTrailerUrlThunk(GameName))
            await setvideoUrl(TrailerVideoResponse.payload);

            //TODO Spotify game music
            let MusicAPIResponse = await dispatch(getGameMusicUrlThunk(GameName))
            await setmusicUrl(MusicAPIResponse.payload);

        }
        catch{
            console.log("Fail to Init")
        }
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

                    <Link to = {{pathname :"/tuiter/create-review"}} state = {{"RawgId" : game.RawgId, "GameName" : game.GameName, "Image" : game.Image}}
                          className="mt-2 me-2 btn btn-large btn-light border border-secondary fw-bolder rounded-pill fa-pull-right">
                        Review this Game
                    </Link>
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
                </div>


                <div className="p-3">
                    <div className="bg-color-blue border-secondary">
                        <Collapsible trigger="Description:"  className="fw-bolder pb-0 mb-0" open={true}>
                            <p className="p-2 collapsible">
                                {game.Description}
                            </p>

                            <p>
                                <i className="fa-solid fa-link"/>
                                <a href={game.Website} title={game.Website} className="text-decoration-none ms-3" target="_blank" rel="noopener">Official Website</a>

                                <i className="fa-solid fa-cake-candles ms-5 me-3"/>
                                {"Release Date: " + game.ReleaseDate}

                            </p>
                        </Collapsible>
                    </div>

                    <div className = "game-title-padding"></div>

                    <div className="bg-color-blue border-secondary">
                        <Collapsible trigger="Trailer:"  className="fw-bolder pb-0 mb-0" open={true}>
                            <iframe className="w-100"
                                    height="400"
                                    src={videoUrl}
                                    title="Trailer"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe>
                        </Collapsible>
                    </div>

                    <div className = "game-title-padding"></div>

                    <div className="bg-color-blue border-secondary">
                        <Collapsible trigger="Game Music:"  className="fw-bolder pb-0 mb-0" open={true}>
                            <Spotify link={ musicUrl } height={100} />
                        </Collapsible>
                    </div>

                    <div className = "game-title-padding"></div>

                    <div className="bg-color-blue border-secondary">
                        <Collapsible trigger="Genres" className="fw-bolder pb-0 mb-0" open={true}>
                            <ul className="">
                                {
                                    game.Genres.map(genre =>
                                        <li className="">
                                            {genre}
                                        </li>)
                                }
                            </ul>
                        </Collapsible>
                    </div>

                    <div className = "game-title-padding"></div>

                    <div className="bg-color-blue border-secondary">
                        <Collapsible trigger="Platforms:" className="fw-bolder pb-0 mb-0" open={true}>
                        <ul className="">
                            {
                                game.Platforms.map(platform =>
                                    <li className="">
                                        {platform}
                                    </li>)
                            }
                        </ul>
                        </Collapsible>
                    </div>

                    <div className = "game-title-padding"></div>


                    <div className="bg-color-blue border-secondary">
                        <Collapsible trigger="Developers:" className=" fw-bolder pb-0 mb-0" open={true}>
                        <ul className="">
                            {
                                game.Developers.map(developer =>
                                    <li className="">
                                        {developer}
                                    </li>)
                            }
                        </ul>
                        </Collapsible>
                    </div>

                    <div className = "game-title-padding"></div>

                    <div className="bg-color-blue border-secondary">
                        <Collapsible trigger="Metacritic Score:" className="fw-bolder pb-0 mb-0" open={true}>
                        <b></b>
                        <b className="ms-2">{game.Metacritic}</b>
                        <div className = "game-title-padding"></div>
                        </Collapsible>
                    </div>

                </div>
            </div>

            <div className = "game-title-padding"></div>

            <div className="border p-2">
                <div className="bg-color-blue">
                    <Collapsible trigger="Reviews" className="h6 fw-bolder pb-0 mb-0" open={true}>
                    <div className = "game-title-padding"></div>
                    <ReviewsList RawgId={gameLocation.state.RawgId}/>
                    </Collapsible>
                </div>
            </div>



        </div>


    );

}
export default GameComponent;