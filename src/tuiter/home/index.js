import React, {useEffect, useState} from "react";
import WhatsHappening from "./whats-happening";
import * as secureService from "../services/security-service";
import * as tuitService from "../services/tuits-service";
import Tuits from "../tuits";
import * as gameService from "../services/review-service/reviews-service";
import GameItem from "./game-item";
import UserItem from "./user-item";


const HomeTuitsList = () => {
    const [module, setModule] = useState('tuits');
    const [tuits, setTuits] = useState([]);
    const [games, setGames] = useState([]);
    const [profile, setProfile] = useState({});
    const [isLoggedIn, setUserStat] = useState(false);

    const userArr = [
        {
            "_id": "1",
            "username": "alice",
            "accountType": "PERSONAL",
        },
        {
            "_id": "2",
            "username": "tuiterAdmin",
            "accountType": "TUITER-ADMIN",
        },
        {
            "_id": "3",
            "username": "gameAdmin",
            "accountType": "GAME-ADMIN",
        },
    ]
    // retrieve all tuits
    const findTuits = () =>
        tuitService.findAllTuits()
            .then(tuits => setTuits(tuits));

    // retrieve all games which have been reviewed
    const findGames = () => {
        gameService.findAllReviewedGames()
            .then(games => setGames(games));
        // const res = await findAllReviewedGames();
        // console.log(res);
    }


    const tuitsClickHandler = () => {
        setModule("tuits");
        findTuits();
    }

    const gamesClickHandler = () => {
        setModule("games");
        findGames();
    }

    useEffect(() => {
        findTuits();
        findGames();
    }, []);

    // retrieve the currently logged in user
    useEffect(() => {
        async function getProfile() {
            const user = await secureService.profile();
            if (Object.keys(user).length === 0) setUserStat(false);
            else setUserStat(true);
            //console.log("user", user)
            setProfile(user);
        }

        getProfile();
    }, []);

    return (
        <>
            {/*// only anonymous user && personal user can create tuit*/}
            {/*// (!isLoggedIn || profile.accountType === 'PERSONAL') &&*/}
            <WhatsHappening
                isLoggedIn={isLoggedIn}
                profile={profile}
                refreshTuits={findTuits}
            />

            {/*module tabs*/}
            {
                // only admin can see module tabs
                (isLoggedIn && (profile.accountType === 'GAME-ADMIN' || profile.accountType === 'TUITER-ADMIN')) &&
                <ul className="nav nav-pills mb-2">
                    <li className="nav-item">
                        <button className={` nav-link ${module === 'tuits' ? 'active' : ''}`}
                                onClick={tuitsClickHandler}>
                            Tuits
                        </button>
                    </li>
                    {
                        profile.accountType === 'TUITER-ADMIN' &&
                        <li className="nav-item">
                            <button className={`nav-link ${module === 'authority' ? 'active' : ''}`}
                                    onClick={() => setModule('authority')}>
                                Authority
                            </button>
                        </li>
                    }
                    {
                        profile.accountType === 'GAME-ADMIN' &&
                        <li className="nav-item">
                            <button className={` nav-link ${module === 'games' ? 'active' : ''}`}
                                    onClick={gamesClickHandler}>
                                Reviewed Game
                            </button>
                        </li>
                    }
                </ul>
            }


            {
                // tuits module
                module === 'tuits'
                && <Tuits tuits={tuits}
                          profile={profile}
                          refreshTuits={findTuits}/>
            }

            {
                module === 'authority' &&
                <ul className="list-group border border-secondary">
                    {
                        userArr.map(user =>
                            <UserItem user={user}/>
                        )
                    }
                </ul>
            }
            {
                // games module
                module === 'games' &&
                <ul className="list-group border border-secondary">
                    {
                        games.map(game =>
                            <GameItem game={game}/>
                        )
                    }
                </ul>
            }
        </>
    );
};
export default HomeTuitsList;