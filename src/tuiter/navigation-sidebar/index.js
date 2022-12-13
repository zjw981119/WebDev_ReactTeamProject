import React from "react";
import {Link} from "react-router-dom";
// use this to parse URL
import {useLocation} from "react-router";
import {useEffect} from "@types/react";
import * as userService from "../services/user-service";

// Convert all parameters into an object deconstructor
// and provide initial default values.
const NavigationSidebar = () => {
    // pathname == '/tuiter/home' or similar path
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    useEffect(() => {
        async function getLoggedInUser() {
            const user = await userService.profile();
            if (Object.keys(user).length === 0) setUserStat(false);
            else setUserStat(true);
            //console.log("user", user)
            setLoggedInUser(user);
        }

        getLoggedInUser();
    }, []);

    const profileClickHandler = () => {

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



            <Link to="/tuiter/profile" className={`list-group-item
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
