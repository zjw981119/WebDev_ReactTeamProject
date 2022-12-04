import React ,{useEffect, useState}from "react";
import Recommended_game_list_item
    from "./recommeded_game_list_item";
import {useDispatch} from "react-redux";
import {findRAWGRecommendedGameThunk} from "../services/rawg-game-service/rawg-games-thunks"

const Recommended_game = () => {

    let [RecommendedGamesArray, setRecommendedGamesArray] = useState([]);
    const dispatch = useDispatch();
    async function GameRecommendHandler() {
        const response = await dispatch(findRAWGRecommendedGameThunk());
        await setRecommendedGamesArray(response.payload.results);
    }

    //Pagination
    useEffect(() => {
        GameRecommendHandler()
    }, []);



    return(
        <ul className="list-group">
            <li className="list-group-item fs-5"> New Games</li>
            {
                RecommendedGamesArray.slice(0, 6).map(Recommended_game =>
                    <Recommended_game_list_item key={Recommended_game._id} gameSummary={Recommended_game}/>)
            }
        </ul>
    );
};

export default Recommended_game;
