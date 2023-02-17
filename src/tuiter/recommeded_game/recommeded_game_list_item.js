import React from "react";
import {Link} from "react-router-dom";
import {AddGame} from "../services/rawg-game-service/rawg-games-service";

const Recommended_game_list_item = ({gameSummary}) => {

    return(
        <li className="list-group-item">
            <Link className="text-decoration-none" to = {{pathname :"/tuiter/game/:" + gameSummary.id}} state = {{"GameName" : gameSummary.name}} onClick={() => AddGame(gameSummary.id)}>
                <div className="row">
                        <div className="col-2">
                            <img height={48} width={90} src={gameSummary.background_image}/>
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
