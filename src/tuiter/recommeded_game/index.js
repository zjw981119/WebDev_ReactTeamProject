import React ,{useEffect, useState}from "react";
import Recommended_game_list_item
    from "./recommeded_game_list_item";
import {findRAWGRecommendedGame} from "../services/rawg-game-service/rawg-games-service";

const Recommended_game = () => {

    let [RecommendedGamesArray, setRecommendedGamesArray] = useState([]);

    //Pagination
    useEffect(() => {
        findRAWGRecommendedGame().then(response =>(setRecommendedGamesArray(response.results)));
    }, []);



    return(
        <ul className="list-group">
            <li className="list-group-item fs-5" > New Games</li>
            {
                RecommendedGamesArray.slice(0, 6).map(Recommended_game =>
                    <Recommended_game_list_item gameSummary={Recommended_game}/>)
            }
        </ul>
    );
};

export default Recommended_game;
