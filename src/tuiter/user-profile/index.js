import React from "react";
import {Outlet, useNavigate} from "react-router-dom";
import {Tabbar} from "./components/tabbar";
import {useUserProfile} from "./hooks";
import {Avatar} from 'antd';
import {useParams} from "react-router";
const UserHomePage = () => {
    const {uid} = useParams();
    const navigate = useNavigate();
    const {profile} = useUserProfile(uid);

    // extract profile
    if (!profile) {
        return <></>
    }
    return (
        <div className="ttr-profile list-group">
            <div className="border border-secondary list-group-item">
                <div className="mb-5 position-relative">

                    <img className="w-100" src="https://th.bing.com/th/id/OIP.b2-Z2RfU6u2Fghz13FPcTAHaEK?pid=ImgDet&rs=1" height='250px'/>
                    <div className="position-absolute top-100 translate-middle" style={{'paddingLeft':'150px'}}>
                        <Avatar style={{width: '100px', height: '100px'}}
                                src={`/images/${profile.username}.png`}/>
                    </div>
                </div>

                <div className="p-2">
                    <h5 className="fw-bolder pb-0 mb-0">
                        {profile.username}
                    </h5>

                    <p className="pt-2">
                        {profile.bio}
                    </p>
                    <p>

                        <i className="fa-solid fa-location-dot me-2"/>
                        {profile.location || 'N/A'}
                        <i className="fa-solid fa-cake-candles ms-3 me-2"/>
                        Born {profile.dateOfBirth ? new Date(profile.dateOfBirth).toDateString() : 'N/A'}
                        <i className="far fa-calendar ms-3 me-2"/>
                        Joined {new Date(profile.joined).toDateString()}
                    </p>

                </div>
                <Tabbar />
            </div>
            <div className={'mt-2'}>
                <Outlet />
            </div>
        </div>
    );

}
export default UserHomePage;
