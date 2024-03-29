import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "./index.css";
import GameJsonArray from "./games.json";
import {Pagination} from "antd";
import {
    AddGame, findPCRAWGGamebyPlatformId,
    findTopRatingRAWGGame,
    findTrendingRAWGGame,
    searchRAWGGames
} from "../services/rawg-game-service/rawg-games-service";

const SearchComponent = () => {
    let [GameSearchInput, setGameSearchInput] = useState('');
    let [gamesArray, setgamesArray] = useState(GameJsonArray);
    const InitialGameArray = GameJsonArray;
    let [TabIndex, setTabIndex] = useState(0);

    // hard-coded json objects
    function ForYouGameHandler() {
        setgamesArray(InitialGameArray);
        setTabIndex(0);
    }

    async function GameSearchInputHandler() {
        const response = await searchRAWGGames(GameSearchInput);
        setgamesArray(response.results);
    }


    async function TrendingGameHandler() {
        const response = await findTrendingRAWGGame();
        setgamesArray(response.results);
        setTabIndex(1);
    }

    async function TopGameHandler() {
        const response = await findTopRatingRAWGGame();
        setgamesArray(response.results);
        setTabIndex(2);
    }

    async function PCGameHandler() {
        const response = await findPCRAWGGamebyPlatformId(1);
        setgamesArray(response.results);
        setTabIndex(3);
    }

    async function PS5GameHandler() {
        const response = await findPCRAWGGamebyPlatformId(187);
        setgamesArray(response.results);
        setTabIndex(4);
    }


    async function XBOXGameHandler() {
        const response = await findPCRAWGGamebyPlatformId(186);
        setgamesArray(response.results);
        setTabIndex(5);
    }

    async function SwitchGameHandler() {
        const response = await findPCRAWGGamebyPlatformId(7);
        setgamesArray(response.results);
        setTabIndex(6);
    }


    //For pagination, when gamesArray changes, update total, pageNum and index
    useEffect(() => {
        setTotalPosts(gamesArray.length)
        setCurPageNum(1);
        pageChangeHandler(1);
    }, [gamesArray]);

    function handleKeyPress(e) {
        if (e.keyCode === 13) {
            GameSearchInputHandler()
        }
    }


    //Pagination
    const [postsPerPage] = useState(6);
    const [totalPosts, setTotalPosts] = useState()
    const [curPageNum, setCurPageNum] = useState(1)
    const [lastPost, setLastPost] = useState(postsPerPage - 1)
    const [firstPost, setFirstPost] = useState(0)


    // update when page number changes
    const pageChangeHandler = (pageNumber) => {
        const indexOfLastPost = (pageNumber * postsPerPage) - 1
        const indexOfFirstPost = indexOfLastPost - postsPerPage + 1
        setCurPageNum(pageNumber)
        setFirstPost(indexOfFirstPost)
        setLastPost(indexOfLastPost)
    }


    return (
        <>
            <div className="row">
                <div className="col-11">
                    <div className="position-relative">
                        <Link>
                            <i className="fa-solid fa-magnifying-glass ps-3 pt-2 position-absolute"
                               style={{"color": "gray"}} onClick={GameSearchInputHandler}/>
                        </Link>
                        <input className="form-control rounded-pill ps-5 border border-secondary"
                               placeholder="Search Game" value={GameSearchInput}
                               onChange={(event) => setGameSearchInput(event.target.value)} onKeyDown={handleKeyPress}/>
                    </div>
                </div>
                <div className="col-1 d-flex align-items-center">

                </div>
            </div>
            {/*<div className="search-bar-padding">*/}

            {/*</div>*/}

            <ul className="nav nav-pills mt-2 mb-2">
                <li className="nav-item">
                    <button className={` nav-link ${TabIndex === 0 ? 'active' : ''}`} onClick={ForYouGameHandler}>For
                        You
                    </button>
                </li>
                <li className="nav-item">
                    <button className={`nav-link ${TabIndex === 1 ? 'active' : ''}`}
                            onClick={TrendingGameHandler}>Trending
                    </button>
                </li>
                <li className="nav-item">
                    <button className={` nav-link ${TabIndex === 2 ? 'active' : ''}`} onClick={TopGameHandler}>Top 40
                    </button>
                </li>
                <li className="nav-item">
                    <button className={` nav-link ${TabIndex === 3 ? 'active' : ''}`} onClick={PCGameHandler}>PC
                    </button>
                </li>
                <li className="nav-item">
                    <button className={` nav-link ${TabIndex === 4 ? 'active' : ''}`} onClick={PS5GameHandler}>PS5
                    </button>
                </li>
                <li className="nav-item">
                    <button className={` nav-link ${TabIndex === 5 ? 'active' : ''}`} onClick={XBOXGameHandler}>Xbox
                    </button>
                </li>
                <li className="nav-item">
                    <button className={` nav-link ${TabIndex === 6 ? 'active' : ''}`}
                            onClick={SwitchGameHandler}>Switch
                    </button>
                </li>
            </ul>

            <ul className="list-group border border-secondary">
                {
                    gamesArray.slice(firstPost, lastPost + 1).map(game =>
                        <li className="list-group-item border-secondary" key={game.id}>
                            {/*Before navigating to game detail page, adding game info into database*/}
                            <Link className="text-decoration-none" to={{pathname: "/tuiter/game/:" + game.id}}
                                  state={{"GameName": game.name}} onClick={() => AddGame(game.id)}>
                                <div className="row">
                                    <div
                                        className="col-6 d-none d-sm-block d-md-block d-lg-block d-xl-block d-xxl-block">
                                        <img width={200} height={140} className=" rounded-3"
                                             src={game.background_image}/>
                                    </div>

                                    <div className="col-6">
                                        <h5 className="game-title-padding">{game.name}</h5>
                                        <div className="">Release Date: {game.released ? game.released : "N/A"}</div>
                                        <div className="">metacritic
                                            Score: {game.metacritic ? game.metacritic : "N/A"} </div>
                                    </div>
                                </div>
                            </Link>
                        </li>)
                }
            </ul>

            <div className='d-flex justify-content-center'>
                {/*Called when the page number or pageSize is changed,
                and it takes the resulting page number and pageSize as its arguments*/}
                <Pagination className="pagination-color"
                            current={curPageNum}
                            total={totalPosts}
                            pageSize={postsPerPage}
                            onChange={pageChangeHandler}/>
            </div>

        </>
    );
};
export default SearchComponent;
