import React, {useEffect, useState} from "react";
import {Link, Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Tabbar} from "./components/tabbar";
import {useProfile} from "../hooks";
import {Avatar} from 'antd';
import {refreshProfile} from "../reducers/profile-reducer";
const Profile = () => {
    // const location = useLocation();
    // const [profile, setProfile] = useState({});
    const profile = useSelector(state => state.profile.profile);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(refreshProfile());
    }, []);

    // extract profile
    if (!profile) {
        return <></>
    }
    return (
        <div className="ttr-profile list-group">
            <div className="border border-secondary list-group-item">
                <div className="row">
                    <div className="col-1">
                        <button className="btn btn-light btn-sm rounded-pill ms-3 mt-3">
                            <i className="fa-solid fa-arrow-left fa-lg"/>
                        </button>
                    </div>
                    <div className="col-11">
                        <h5 className="p-2 mb-0 pb-0 fw-bolder">
                            {profile.username}
                            <i className="fa fa-badge-check text-primary"/>
                        </h5>

                    </div>
                </div>
                <div className="mb-5 position-relative">

                    <img className="w-100" src={profile.bannerPicture} height='250px'/>
                        {/*className="position-relative"*/}
                    <div className="position-absolute top-100 translate-middle" style={{'paddingLeft':'150px'}}>
                        {/*className="position-absolute top-0 start-50 translate-middle"*/}
                        {/*<img className="rounded-circle"*/}
                        {/*     style={{'width' : '100px'}}*/}
                        {/*     src={"/images/" + profile.avatar}/>*/}
                        {!profile.avatar && <Avatar style={{width: '100px', height: '100px'}} icon={<i className="bi bi-person-circle" style={{fontSize: '80px'}}></i>}/>}
                        {profile.avatar && (
                          <Avatar style={{width: '100px', height: '100px'}}
                                  src={ profile.avatar}/>
                        )}
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
                    <p>
                        <i className="fa-solid fa-phone me-2"/>
                        {profile.phone || 'N/A'}
                        <i className="fa-solid fa-location-dot ms-3 me-2"/>
                        {profile.location || 'N/A'}
                        <i className="fa-solid fa-cake-candles ms-3 me-2"/>
                        Born {profile.dateOfBirth ? new Date(profile.dateOfBirth).toDateString() : 'N/A'}
                        <i className="far fa-calendar ms-3 me-2"/>
                        Joined {new Date(profile.joined).toDateString()}
                    </p>
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
