import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import loadingGame from "./game.json";
import ReviewsList from "../review/index";
import Collapsible from 'react-collapsible';
import Spotify from "react-spotify-embed";
import {findGameByRawgId, getGameMusicUrl, getGameTrailerUrl} from "../services/game-service/games-service";
import * as service from "../services/review-service/reviews-service";
import "./index.css"


const GameComponent = () => {
    const path = useLocation();
    // extract game id from url
    const RawgId = Number(path.pathname.split(':')[1]);
    const [game, setGame] = useState(loadingGame);
    const [videoUrl, setVideoUrl] = useState('');
    const [musicId, setMusicId] = useState('');
    const [reviews, setReviews] = useState([]);

    // Initialize with timer to get the game info from server
    // Before navigating to game detail page, adding game info into database
    // Since ComponentInit() will try to retrieve game info from database
    // -> need to wait some time until the success of insertion
    useEffect(() => {
        setTimeout(function () {
            ComponentInit()
        }, 600);
    }, [])


    // get the game info(detail, reviews) from server
    async function ComponentInit() {
        try {
            const gameDetail = await findGameByRawgId(RawgId);
            setGame(gameDetail);
            // set video and music url
            setVideoUrl(await getGameTrailerUrl(gameDetail.GameName));
            setMusicId(await getGameMusicUrl(gameDetail.GameName));
            // set reviews
            setReviews(await service.findReviewByRawgId(RawgId));
        } catch {
            console.log("Fail to init game detail info")
        }
    }

    const refreshReview = () => {
        service.findReviewByRawgId(RawgId).then(reviews => setReviews(reviews));
    }


    return (

        <div className="ttr-profile list-group">

            <div className="border border-secondary list-group-item">

                <div className="">
                    <div className="">
                        <button className=" btn btn-light btn-lg rounded-pill ms-2 mt-3 ">
                            <Link to="/tuiter/search">
                                <i className="fa-solid fa-arrow-left fa-lg"/>
                            </Link>
                        </button>

                        <button
                            className=" mt-3 me-2 btn btn-large btn-light border border-secondary fw-bolder rounded-pill fa-pull-right">
                            <Link to={{pathname: "/tuiter/create-review"}} state={{
                                "RawgId": game.RawgId,
                                "GameName": game.GameName,
                                "Image": game.Image,
                                "game": game
                            }}
                                  className="text-decoration-none">
                                Review this Game
                            </Link>
                        </button>
                    </div>
                </div>

                {/* game name */}
                <div className="col-11">
                    {game.GameName ? <h3 className="p-2 mb-0 pb-0 fw-bolder">
                        {game.GameName}
                        <i className="fa fa-badge-check text-primary"/>
                    </h3> : <h3 className="p-2 mb-0 pb-0 fw-bolder"></h3>}
                </div>

                {/* game image */}
                <div className="mb-5 position-relative game-title-padding">
                    <img className="w-100"
                         src={game.Image ? game.Image : "https://i2.wp.com/codemyui.com/wp-content/uploads/2017/09/rotate-pulsating-loading-animation.gif"}
                         height='350px' alt=''/>
                </div>

                {/* game description */}
                <div className="p-3">
                    <div className="bg-color-blue border-secondary">
                        <Collapsible trigger="Description:" className="fw-bolder pb-0 mb-0" open={true}>
                            <p className="p-2 collapsible">
                                {game.Description}
                            </p>

                            <p>
                                <i className="fa-solid fa-link"/>
                                <a href={game.Website} title={game.Website} className="text-decoration-none ms-3"
                                   target="_blank" rel="noopener">Official Website</a>

                                <i className="fa-solid fa-cake-candles ms-5 me-3"/>
                                {"Release Date: " + game.ReleaseDate}

                            </p>
                        </Collapsible>
                    </div>

                    {/* trailer video */}
                    <div className="bg-color-blue border-secondary game-title-padding">
                        <Collapsible trigger="Trailer Video:" className="fw-bolder pb-0 mb-0" open={true}>
                            {videoUrl ? <iframe className="w-100"
                                                height="400"
                                                src={videoUrl}
                                                title="Trailer"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen>
                            </iframe> : <p>N/A</p>
                            }
                        </Collapsible>
                    </div>

                    {/* game music */}
                    <div className="bg-color-blue border-secondary game-title-padding">
                        <Collapsible trigger="Game Music:" className="fw-bolder pb-0 mb-0" open={true}>
                            {musicId ? <Spotify link={"https://open.spotify.com/playlist/" + musicId} height={380}/> :
                                <p>N/A</p>
                            }
                        </Collapsible>
                    </div>

                    {/* game genres */}
                    <div className="bg-color-blue border-secondary game-title-padding">
                        <Collapsible trigger="Genres" className="fw-bolder pb-0 mb-0" open={true}>
                            {game.Genres ? <ul className="">
                                {
                                    game.Genres.map(genre =>
                                        <li>
                                            {genre}
                                        </li>)
                                }
                            </ul> : <p>Loading...</p>}
                        </Collapsible>
                    </div>

                    {/* game platforms */}
                    <div className="bg-color-blue border-secondary game-title-padding">
                        <Collapsible trigger="Platforms:" className="fw-bolder pb-0 mb-0" open={true}>
                            {game.Platforms ? <ul className="">
                                {
                                    game.Platforms.map(platform =>
                                        <li className="">
                                            {platform}
                                        </li>)
                                }
                            </ul> : <p>Loading...</p>}
                        </Collapsible>
                    </div>

                    {/* game developers */}
                    <div className="bg-color-blue border-secondary game-title-padding">
                        <Collapsible trigger="Developers:" className=" fw-bolder pb-0 mb-0" open={true}>
                            {game.Developers ? <ul className="">
                                {
                                    game.Developers.map(developer =>
                                        <li className="">
                                            {developer}
                                        </li>)
                                }
                            </ul> : <p>Loading...</p>}
                        </Collapsible>
                    </div>

                    {/* game metacritic score */}
                    <div className="bg-color-blue border-secondary game-title-padding">
                        <Collapsible trigger="Metacritic Score:" className="fw-bolder pb-0 mb-0" open={true}>
                            <b/>
                            {game.Metacritic ?
                                <b className="ms-2">{game.Metacritic}</b>
                                : <b>N/A</b>}
                        </Collapsible>
                    </div>

                </div>
            </div>

            {/* game review */}
            <div className="border p-2 game-title-padding">
                <div className="bg-color-blue">
                    <Collapsible trigger="Reviews" className="h6 fw-bolder pb-0 mb-0" open={true}>
                        {/*<div className="game-title-padding"></div>*/}
                        <ReviewsList reviews={reviews} refreshReview={refreshReview}/>
                    </Collapsible>
                </div>
            </div>
        </div>
    );

}
export default GameComponent;