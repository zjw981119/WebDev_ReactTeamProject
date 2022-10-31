import NavigationSidebar from "./navigation-sidebar";
import HomeComponent from "./home/index";
import TuitList from "./tuits"
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore/index";
import {Routes, Route} from "react-router";
import who from "./reducers/who-reducer";
import exploretTuits from "./reducers/explore-tuits-reducer";
import homeTuits from "./reducers/home-tuits-reducer";
import profile from "./reducers/profile-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileComponent from "./profile";
import EditProfile from "./profile/edit-profile";

// since whoReducer is just value, need a key to extract global value
const store = configureStore(
    {reducer: {who, exploretTuits, homeTuits, profile}});


function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route path="/home" element={<TuitList/>}/>
                        <Route path="/explore" element={<ExploreComponent/>}/>
                        <Route path="/profile" element={<ProfileComponent/>}/>
                        <Route path="/edit-profile" element={<EditProfile/>}/>
                    </Routes>
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter

