import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {findRAWGGameDetailThunk} from "../services/rawg-game-service/rawg-games-thunks";
import {createGameThunk} from "../services/game-service/games-thunks";
import {useDispatch} from "react-redux";
import GameArray from "../game/game.json";
import {AddGame} from "../services/rawg-game-service/rawg-games-service";
const Recommended_game_list_item = (
    {
        gameSummary = { name: 'GTA', id: 3489 ,released: '2022-11-01', background_image: '' }
    }

) => {

    const dispatch = useDispatch();



    return(
        <li className="list-group-item" key={gameSummary.id}>
            <Link className="text-decoration-none" to = {{pathname :"/tuiter/game/:" + gameSummary.id}} state = {{"GameName" : gameSummary.name}} onClick={() => AddGame(gameSummary.id)}>
                <div className="row">
                        <div className="col-2">
                            <img className height={48} width={90} src={gameSummary.background_image}/>
                        </div>

                        <div className="col-2 ps-3">
                        </div>

                        <div className="col-8">
                            <div className="fw-bold">{gameSummary.name}</div>
                            <div>Release Date: {gameSummary.released}</div>
                        </div>
                </div>
            </Link>
        </li>
    );
};
export default Recommended_game_list_item;
