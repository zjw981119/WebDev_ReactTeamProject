import React, {useState, useEffect } from "react";
import {Link} from "react-router-dom";
import "./index.css";
import GameJsonArray from "./games.json";
import {useDispatch} from "react-redux";
import {searchRAWGGamesThunk, findRAWGGameDetailThunk} from "../services/rawg-game-service/rawg-games-thunks";
import {createGameThunk} from "../services/game-service/games-thunks";
import {Pagination} from "antd";
import {AddGame} from "../services/rawg-game-service/rawg-games-service";
const SearchComponent = () => {
    let [GameSearchInput, setGameSearchInput] = useState('');
    let [gamesArray, setgamesArray] = useState(GameJsonArray);

    const dispatch = useDispatch();

    async function GameSearchInputHandler() {
        const response = await dispatch(searchRAWGGamesThunk(GameSearchInput));
        await setgamesArray(response.payload.results);
    }

    //Pagination
    useEffect(() => {
        setTotalPosts(gamesArray.length)
    }, [gamesArray]);

    function handleKeyPress(e) {
        if(e.keyCode === 13){
            GameSearchInputHandler()
        }
    }


    //Pageination

    const [postsPerPage] = useState(5);
    const [totalPosts, setTotalPosts] = useState()
    const [lastPost, setLastPost] = useState(postsPerPage - 1)
    const [firstPost, setFirstPost] = useState(0)
    const [serverCall, setServerCall] = useState(false)

    const [pageAtServerCall, setPageAtServerCall] = useState([])

    useEffect(() => {
        const serverCallPage = []

        serverCallPage.push((20 / postsPerPage) + 1)
        for (var i = 0; i < (totalPosts / postsPerPage) - 1; i++) {
            if (serverCallPage.indexOf(serverCallPage[0] + i * (20 / postsPerPage)) === -1) {
                serverCallPage.push(serverCallPage[0] + i * (20 / postsPerPage))
            }
        }

        setPageAtServerCall(serverCallPage)

    }, [totalPosts, postsPerPage])


    const pageChangeHandler = (pageNumber) => {
        const indexOfLastPost = (pageNumber * postsPerPage) - 1
        const indexOfFirstPost = indexOfLastPost - postsPerPage + 1
        const index = pageAtServerCall.indexOf(pageNumber)

        pageAtServerCall.map((pageAtServerCall) => {
            if (pageNumber === pageAtServerCall) {
                setServerCall(true)
            }
        })

        if (index !== -1) {
            pageAtServerCall.splice(index, 1)
        }

        setFirstPost(indexOfFirstPost)
        setLastPost(indexOfLastPost)
    }


    return(
        <>
            <div className="row">
                <div className="col-11">
                    <div className="position-relative">
                        <Link>
                        <i className="fa-solid fa-magnifying-glass ps-3 pt-2 position-absolute" style={{"color": "gray"}} onClick={GameSearchInputHandler}></i>
                        </Link>
                        <input className="form-control rounded-pill ps-5 border border-secondary"
                               placeholder="Search Game"  value = {GameSearchInput}
                               onChange={(event) => setGameSearchInput(event.target.value)} onKeyDown={handleKeyPress}/>
                    </div>
                </div>
                <div className="col-1 d-flex align-items-center">

                </div>
            </div>
            <div className="search-bar-padding">

            </div>

            <ul className="list-group border border-secondary">
                {
                    gamesArray.slice(firstPost, lastPost + 1).map(game =>
                        <li className="list-group-item border-secondary">
                            <Link className="text-decoration-none" to = {{pathname :"/tuiter/game/:" + game.id}} state = {{"GameName" : game.name}} onClick={() => AddGame(game.id)}>
                                <div className="row">
                                    <div className="col-6 d-none d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block">
                                        <img width={200} height={140} className=" rounded-3" src={game.background_image}/>
                                    </div>

                                    <div className="col-6">
                                        <h5 className="game-title-padding">{game.name}</h5>
                                        <div className="">Release Date:  {game.released ? game.released : "N/A"}</div>
                                        <div className="">metacritic Score:  {game.metacritic ? game.metacritic : "N/A"} </div>
                                    </div>
                                </div>
                            </Link>
                        </li>)
                }
            </ul>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <Pagination className="pagination-color"
                            defaultCurrent={1}
                            total={totalPosts}
                            pageSize={postsPerPage}
                            onChange={pageChangeHandler}
                />
            </div>

        </>
    );
};
export default SearchComponent;
