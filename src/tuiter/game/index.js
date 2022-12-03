import React, {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {createGameThunk} from "../services/game-service/games-thunks";
import {useDispatch} from "react-redux";
import {searchRAWGGamesThunk} from "../services/rawg-game-service/rawg-games-thunks";

const GameComponent = () => {


    // extract game
    const profile = useSelector(state => state.profile)

    const dispatch = useDispatch();

    return (
        <div className="ttr-profile">
            <div className="border border-secondary">
                <div className="row">
                    <div className="col-1">
                        <button className="btn btn-light btn-sm rounded-pill ms-3 mt-3">
                            <Link to="/tuiter/search">
                                <i className="fa-solid fa-arrow-left fa-lg"/>
                            </Link>
                        </button>
                    </div>
                    <div className="col-11">
                        <h5 className="p-2 mb-0 pb-0 fw-bolder">
                            {profile.username}

                            <i className="fa fa-badge-check text-primary"/>
                        </h5>
                        <span className="ps-2">{profile.tuitCount + ' Tuits'}</span>
                    </div>
                </div>
                <div className="mb-5 position-relative">
                    <img className="w-100" src={"/images/" + profile.bannerPicture} height='250px'/>
                    {/*className="position-relative"*/}
                    <div className="position-absolute top-100 translate-middle" style={{'paddingLeft':'150px'}}>

                    </div>
                    <Link to="/tuiter/edit-profile"
                          className="mt-2 me-2 btn btn-large btn-light border border-secondary fw-bolder rounded-pill fa-pull-right">
                        Edit profile
                    </Link>
                </div>

                <div className="p-2">
                    <h5 className="fw-bolder pb-0 mb-0">
                        {profile.username}
                        {/*<i className="fa fa-badge-check text-primary"/>*/}
                    </h5>
                    <h6 className="pt-0 text-secondary">
                        {profile.handle}
                    </h6>
                    <p className="pt-2">
                        {profile.bio}
                    </p>
                    <p>
                        <i className="fa-solid fa-link"/>
                        <a href={profile.website} title={profile.website} className="text-decoration-none ms-2">Website</a>
                        <i className="fa-solid fa-location-dot ms-3 me-2"/>
                        {profile.location}
                        <i className="fa-solid fa-cake-candles ms-3 me-2"/>
                        {"Born " + profile.dateOfBirth}
                        <i className="far fa-calendar ms-3 me-2"/>
                        {"Joined " + profile.dateJoined}
                    </p>
                    <b>{profile.followingCount}</b> Following
                    <b className="ms-4">{profile.followersCount}</b> Followers

                </div>
            </div>

        </div>
    );

}
export default GameComponent;