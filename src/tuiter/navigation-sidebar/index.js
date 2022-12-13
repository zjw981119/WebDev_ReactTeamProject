import React, {useEffect, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
// use this to parse URL
import {useLocation} from "react-router";
import * as userService from "../services/user-service";

// Convert all parameters into an object deconstructor
// and provide initial default values.
const NavigationSidebar = () => {
    // pathname == '/tuiter/home' or similar path
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    const navigate = useNavigate()
    const [loggedInUser, setLoggedInUser] = useState({});
    let IsLoggedIn = false
    useEffect(() => {
        async function getLoggedInUser() {
            const user = await userService.profile();
            setLoggedInUser(user)
            if (Object.keys(user).length !== 0) {
                IsLoggedIn = true;
            }
            //console.log("user", user)

        }

        getLoggedInUser();
    }, []);

    const profileClickHandler = () => {
        if (!IsLoggedIn)
        {
            navigate('/tuiter/login');
        } else {
            navigate(`/tuiter/profile/${loggedInUser._id}`);
        }
    }
    return (
        <div className="list-group">
            <div  className="list-group-item"><img className="w-100" src="/images/GEN.png"/></div>
            <Link to="/tuiter/home" className={`list-group-item ${active === 'home'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="fa-solid fa-house me-2"/>
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        <span>Home</span>
                    </div>
                </div>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="fa-solid fa-hashtag me-2"/>
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        <span>Explore</span>
                    </div>
                </div>
            </Link>

            <Link to="/tuiter/search" className={`list-group-item
                    ${active === 'search'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="fa-regular fa-chess-king me-2"/>
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        <span>Search Games</span>
                    </div>
                </div>
            </Link>



            <div className={`list-group-item
                    ${active === 'profile'?'active':''}`}
            onClick={profileClickHandler}>
                <div className="row">
                    <div className="col-2">
                        <i className="fa-regular fa-id-card me-2"/>
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        <span>Profile</span>
                    </div>
                </div>
            </div>

            <Link to="/tuiter/login" className={`list-group-item
                    ${active === 'login'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="fa-regular fa-user me-2"/>
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        <span>Login</span>
                    </div>
                </div>
            </Link>
            <Link to="/tuiter/aboutus" className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="fa-solid fa-ellipsis me-2"/>
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        <span>About Us</span>
                    </div>
                </div>
            </Link>
        </div>
    );

};
export default NavigationSidebar;
