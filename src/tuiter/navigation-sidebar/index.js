import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
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
    const [loggedInUser, setLoggedInUser] = useState({});
    const [isLoggedIn, setLoginStatus] = useState({});
    useEffect(() => {
        async function getLoggedInUser() {
            const user = await userService.profile();
            setLoggedInUser(user)
            // eslint-disable-next-line react-hooks/exhaustive-deps
            if(Object.keys(user).length === 0){
                setLoginStatus(false);
            } else {
                setLoginStatus(true);
            }
        }

        getLoggedInUser();
    }, [pathname]);

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

            <Link to={isLoggedIn ? `/tuiter/profile/${loggedInUser._id}` : '/tuiter/login'} className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <div className="row">
                    <div className="col-2">
                        <i className="fa-regular fa-id-card me-2"/>
                    </div>
                    <div className="col-10 d-none d-xl-block">
                        <span>Profile</span>
                    </div>
                </div>
            </Link>

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
