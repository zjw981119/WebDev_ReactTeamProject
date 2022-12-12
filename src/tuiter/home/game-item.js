import React from "react";
import {Link} from "react-router-dom";
import "../search/index.css";

const GameItem = ({game}) => {
    return (
        <li key={game.RawgId} className="list-group-item border-secondary" >
            <Link className="text-decoration-none"
                  to={`/tuiter/game/:${game.RawgId}`}
                  state={{"GameName": game.GameName}}
            >
                <div className="row">
                    <div className="col-6 d-none d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block">
                        <img width={200} height={140} className=" rounded-3" src={game.Image}/>
                    </div>

                    <div className="col-6">
                        <h5 className="game-title-padding">{game.GameName}</h5>
                        <div className="">Release Date: {game.ReleaseDate ? game.ReleaseDate : "N/A"}</div>
                        <div className="">metacritic Score: {game.Metacritic ? game.Metacritic : "N/A"} </div>
                    </div>
                </div>
            </Link>
        </li>
    );
};
export default GameItem;
