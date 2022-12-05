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
    let [musicId , setmusicId] = useState('');

    const dispatch = useDispatch();

    //Initialize with timmer to get the game info from server
    useEffect(() => {
        setTimeout(function(){
            try {
                ComponentInit()
                InitMusic()
            }
            catch{

            }
        }, 700);
    }, [])

    //Initialize Music use Effect
    useEffect(() => {
        InitMusic()
    }, [])

    useEffect(() => {
    }, [game])

    useEffect(() => {
    }, [videoUrl])


    //Function to get the game info from server
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

        }
        catch{
            console.log("Fail to Init")
        }
    }

    //function to initialize music
    async function InitMusic()
    {
        try {
            const GameName = gameLocation.state.GameName;
            let MusicAPIResponse = await dispatch(getGameMusicUrlThunk(GameName))
            await setmusicId(MusicAPIResponse.payload);
        }
        catch (e) {
            console.log("Fail to Load Music or music cannot be found")
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
                    {game.GameName ? <h3 className="p-2 mb-0 pb-0 fw-bolder">
                        {game.GameName}
                        <i className="fa fa-badge-check text-primary"/>
                    </h3> : <h3 className="p-2 mb-0 pb-0 fw-bolder"></h3>}
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
                        <Collapsible trigger="Related Video:"  className="fw-bolder pb-0 mb-0" open={true}>
                            {videoUrl ?<iframe className="w-100"
                                    height="400"
                                    src={videoUrl}
                                    title="Trailer"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen>
                            </iframe> : <p>N/A</p>
                            }
                        </Collapsible>
                    </div>

                    <div className = "game-title-padding"></div>

                    <div className="bg-color-blue border-secondary">
                        <Collapsible trigger="Game Music:"  className="fw-bolder pb-0 mb-0" open={true}>
                            {musicId ? <Spotify link={"https://open.spotify.com/playlist/" + musicId } height={300}></Spotify> : <p>N/A</p>
                            }
                        </Collapsible>
                    </div>

                    <div className = "game-title-padding"></div>

                    <div className="bg-color-blue border-secondary">
                        <Collapsible trigger="Genres" className="fw-bolder pb-0 mb-0" open={true}>
                            {game.Genres ? <ul className="">
                                {
                                    game.Genres.map(genre =>
                                        <li className="">
                                            {genre}
                                        </li>)
                                }
                            </ul> : <p>Loading...</p>}
                        </Collapsible>
                    </div>

                    <div className = "game-title-padding"></div>

                    <div className="bg-color-blue border-secondary">
                        <Collapsible trigger="Platforms:" className="fw-bolder pb-0 mb-0" open={true}>
                            {game.Platforms ?<ul className="">
                            {
                                game.Platforms.map(platform =>
                                    <li className="">
                                        {platform}
                                    </li>)
                            }
                            </ul> : <p>Loading...</p>}
                        </Collapsible>
                    </div>

                    <div className = "game-title-padding"></div>


                    <div className="bg-color-blue border-secondary">
                        <Collapsible trigger="Developers:" className=" fw-bolder pb-0 mb-0" open={true}>
                            {game.Developers ?<ul className="">
                            {
                                game.Developers.map(developer =>
                                    <li className="">
                                        {developer}
                                    </li>)
                            }
                            </ul>: <p>Loading...</p>}
                        </Collapsible>
                    </div>

                    <div className = "game-title-padding"></div>

                    <div className="bg-color-blue border-secondary">
                        <Collapsible trigger="Metacritic Score:" className="fw-bolder pb-0 mb-0" open={true}>
                        <b></b>
                            {game.Metacritic ?
                            <b className="ms-2">{game.Metacritic}</b>
                            : <b>N/A</b>}
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