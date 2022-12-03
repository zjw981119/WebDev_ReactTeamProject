import React, {useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./index.css";
import GameJsonArray from "./games.json";
import {useDispatch} from "react-redux";
import {searchRAWGGamesThunk, findRAWGGameDetailThunk} from "../services/rawg-game-service/rawg-games-thunks";
import {createGameThunk} from "../services/game-service/games-thunks";
const SearchComponent = () => {
    let [GameSearchInput, setGameSearchInput] = useState('');
    let [gamesArray, setgamesArray] = useState(GameJsonArray);

    const dispatch = useDispatch();

    async function GameSearchInputHandler() {
        //console.log(GameSearchInput);

        const response = await dispatch(searchRAWGGamesThunk(GameSearchInput));
        await setgamesArray(response.payload.results);

        for(let index in response.payload.results)
        {
            const DetailSearchResponse = await dispatch(findRAWGGameDetailThunk(response.payload.results[index].id));
            console.log(DetailSearchResponse.payload)
            const res = DetailSearchResponse.payload;
            const gameCreateReq =
                {
                    "RawgId" : res.id,
                    "GameName": res.name,
                    "Description": res.description,
                    "Metacritic": res.metacritic,
                    "ReleaseDate": res.released,
                    "Image": res.background_image
                }
            const CreateGameResponse = await dispatch(createGameThunk(gameCreateReq));
        }

    }

    useEffect(() => {

    }, [gamesArray]);

    function handleKeyPress(e) {
        if(e.keyCode === 13){
            GameSearchInputHandler()
        }
    }


    return(
        <>
            <div className="row">
                <div className="col-11">
                    <div className="position-relative">
                        <i className="fa-solid fa-magnifying-glass ps-3 pt-2 position-absolute" style={{"color": "gray"}}></i>
                        <input className="form-control rounded-pill ps-5 border border-secondary"
                               placeholder="Search Game"  value = {GameSearchInput}
                               onChange={(event) => setGameSearchInput(event.target.value)} onKeyDown={handleKeyPress}/>
                    </div>
                </div>
                <div className="col-1 d-flex align-items-center">
                    <i className="fa-solid fa-magnifying-glass ps-3 pt-2 position-absolute" style={{"color": "deepskyblue"}} onClick={GameSearchInputHandler}></i>
                </div>

            </div>

            <ul className="list-group border border-secondary">
                {
                    gamesArray.map(game =>
                        <li className="list-group-item">
                            <Link to = {{pathname :"/tuiter/game"}} state = {{"RawgId" : game.id}} >
                                <div className="row">
                                    <div className="col-6 ">
                                        <img width={240} height={140} className="float-end rounded-3" src={game.background_image}/>
                                    </div>

                                    <div className="col-6">
                                        <h5 className="game-title-padding">{game.name}</h5>
                                        <div className="">Release Date: {game.released}</div>
                                        <div className="">metacritic Score: {game.metacritic}</div>
                                    </div>
                                </div>
                            </Link>
                        </li>)
                }
            </ul>

        </>
    );
};
export default SearchComponent;
