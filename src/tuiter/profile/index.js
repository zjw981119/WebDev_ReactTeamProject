import React, {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";
import {Tabbar} from "./components/tabbar";
import {Avatar} from 'antd';

import * as userService from "../services/user-service";
import {useParams} from "react-router";
import {refreshProfile} from "../reducers/profile-reducer";
import {useDispatch} from "react-redux";

const Profile = () => {
    // const location = useLocation();
    const {uid} = useParams();
    const {profileUser, setProfileUser} = useState({});
    const [loggedInUser, setLogggedInUser] = useState({});
    // check whether user logged-in
    const [isLoggedIn, setUserStat] = useState(false);
    const dispatch = useDispatch();

    // const profile = useSelector(state => state.profile.profile);
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(refreshProfile());
    // }, []);

    // retrieve the currently logged in user
    useEffect(() => {
        async function getLoggedInUser() {
            const user = await userService.profile();
            console.log(user)
            if (Object.keys(user).length === 0) setUserStat(false);
            else setUserStat(true);
            //console.log("user", user)
            setLogggedInUser(user);
        }

        getLoggedInUser();
    }, []);

    // retrieve profile user
    useEffect(() => {
        async function getProfileUser() {
            const user = await userService.getUserProfile(uid);
            // console.log(user)
            //console.log("user", user)
            setProfileUser(user);
        }

        getProfileUser();
    }, []);

    const shouldDisplay = isLoggedIn && profileUser._id === loggedInUser._id;


    return (
        <div className="ttr-profile list-group">
            <div className="border border-secondary list-group-item">
                <div className="mb-5 position-relative">

                    <img className="w-100"
                         src="https://th.bing.com/th/id/OIP.b2-Z2RfU6u2Fghz13FPcTAHaEK?pid=ImgDet&rs=1" height='250px'/>
                    {/*className="position-relative"*/}
                    <div className="position-absolute top-100 translate-middle" style={{'paddingLeft': '150px'}}>
                        {/*className="position-absolute top-0 start-50 translate-middle"*/}
                        {/*<img className="rounded-circle"*/}
                        {/*     style={{'width' : '100px'}}*/}
                        {/*     src={"/images/" + profile.avatar}/>*/}
                        {/*<Avatar style={{width: '100px', height: '100px'}}*/}
                        {/*        src={`/images/${profileUser.username}.png`}/>*/}
                    </div>
                    {
                        shouldDisplay &&
                        <Link to="/tuiter/edit-profile"
                              className="mt-2 me-2 btn btn-large btn-light border border-secondary fw-bolder rounded-pill fa-pull-right">
                            Edit profile
                        </Link>
                    }

                </div>

                <div className="p-2">
                    <h5 className="fw-bolder pb-0 mb-0">
                        {profileUser.username}
                    </h5>
                    {
                        shouldDisplay &&
                        <h6 className="pt-0 text-secondary">
                            {profileUser.email}
                        </h6>
                    }
                    <p className="pt-2">
                        {profileUser.bio}
                    </p>
                    <div>
                        <div>
                            {
                                shouldDisplay &&
                                <span>
                                    <i className="fa-solid fa-phone me-2"/>
                                    {profileUser.phone || 'N/A'}
                                </span>
                            }
                            <span>
                                <i className="fa-solid fa-location-dot ms-3 me-2"/>
                                {profileUser.location || 'N/A'}
                            </span>
                        </div>
                        <div>
                            <span>
                                <i className="fa-solid fa-cake-candles me-2"/>
                                Born {profileUser.dateOfBirth ? new Date(profileUser.dateOfBirth).toDateString() : 'N/A'}
                            </span>
                            <span>
                                <i className="far fa-calendar ms-3 me-2"/>
                                Joined {new Date(profileUser.joined).toDateString()}
                            </span>
                        </div>
                    </div>
                    {/*<b>{profile.followingCount}</b> Following*/}
                    {/*<b className="ms-4">{profile.followersCount}</b> Followers*/}

                </div>
                <Tabbar/>
            </div>
            <div className={'mt-2'}>
                <Outlet/>
            </div>
        </div>
    );

}
export default Profile;
