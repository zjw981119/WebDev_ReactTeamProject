import NavigationSidebar from "./navigation-sidebar";
import TuitList from "./tuits"
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore/index";
import SearchComponent from "./search/index";
import {Routes, Route} from "react-router";
import who from "./reducers/who-reducer";
import exploretTuits from "./reducers/explore-tuits-reducer";
import homeTuitsData from "./reducers/home-tuits-reducer";
import profile from "./reducers/profile-reducer";
import review from "./reducers/review-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileComponent from "./profile";
import GameComponent from "./game/index";
import EditProfile from "./profile/edit-profile";
import CreateReview from "./review/create-review";

// since whoReducer is just value, need a key to extract global value
const store = configureStore(
    {reducer: {who, exploretTuits, homeTuitsData, profile, review}});


function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route path="/home" element={<TuitList/>}/>
                        <Route path="/explore" element={<ExploreComponent/>}/>
                        <Route path="/search" element={<SearchComponent/>}/>
                        <Route path="/game" element={<GameComponent/>}/>
                        <Route path="/create-review" element={<CreateReview/>}/>
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

