import React, {useEffect, useState} from "react";
import {Link, Outlet, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Tabbar} from "./components/tabbar";
import {useProfile} from "../hooks";
import {Avatar} from 'antd';
import {refreshProfile} from "../reducers/profile-reducer";
import * as security_service from "../services/security-service";
const Profile = () => {
    // const location = useLocation();
    // const [profile, setProfile] = useState({});
    const profile = useSelector(state => state.profile.profile);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(refreshProfile());
    }, []);

    const navigate = useNavigate();

    // retrieve the currently logged in user
    useEffect(() => {
            async function fetchUser() {


                const user = await security_service.profile();
                if (Object.keys(user).length === 0)
                {
                    navigate('/tuiter/login');
                }

            }
            fetchUser();
        }, []
    );

    // extract profile
    if (!profile) {
        return <></>
    }
    return (
        <div className="ttr-profile list-group">
            <div className="border border-secondary list-group-item">
                <div className="mb-5 position-relative">

                    <img className="w-100" src="https://th.bing.com/th/id/OIP.b2-Z2RfU6u2Fghz13FPcTAHaEK?pid=ImgDet&rs=1" height='250px'/>
                        {/*className="position-relative"*/}
                    <div className="position-absolute top-100 translate-middle" style={{'paddingLeft':'150px'}}>
                        {/*className="position-absolute top-0 start-50 translate-middle"*/}
                        {/*<img className="rounded-circle"*/}
                        {/*     style={{'width' : '100px'}}*/}
                        {/*     src={"/images/" + profile.avatar}/>*/}
                          <Avatar style={{width: '100px', height: '100px'}}
                                  src={`/images/${profile.username}.png`}/>
                    </div>
                    <Link to="/tuiter/edit-profile"
                          className="mt-2 me-2 btn btn-large btn-light border border-secondary fw-bolder rounded-pill fa-pull-right">
                        Edit profile
                    </Link>
                </div>

                <div className="p-2">
                    <h5 className="fw-bolder pb-0 mb-0">
                        {profile.username}
                    </h5>
                    <h6 className="pt-0 text-secondary">
                        {profile.email}
                    </h6>
                    <p className="pt-2">
                        {profile.bio}
                    </p>
                    <div>
                        <div>
                        <i className="fa-solid fa-phone me-2"/>
                        {profile.phone || 'N/A'}
                        <i className="fa-solid fa-location-dot ms-3 me-2"/>
                        {profile.location || 'N/A'}
                        </div>
                        <div>
                        <i className="fa-solid fa-cake-candles me-2"/>
                        Born {profile.dateOfBirth ? new Date(profile.dateOfBirth).toDateString() : 'N/A'}
                        <i className="far fa-calendar ms-3 me-2"/>
                        Joined {new Date(profile.joined).toDateString()}
                        </div>
                    </div>
                    {/*<b>{profile.followingCount}</b> Following*/}
                    {/*<b className="ms-4">{profile.followersCount}</b> Followers*/}

                </div>
                <Tabbar />
            </div>
            <div className={'mt-2'}>
                <Outlet />
            </div>
        </div>
    );

}
export default Profile;
