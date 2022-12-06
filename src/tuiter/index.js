import NavigationSidebar from "./navigation-sidebar";
import TuitList from "./tuits"
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
import Recommended_game from "./recommeded_game";
import Login from "./authentication";
import Register from "./authentication/register";

import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import snowParticleConfig from "./particle-effect/Snow-Particle-Config";

import { Fab, Action } from "./floating-Menu/index";
import React, {useState} from "react";
import "react-tiny-fab/dist/styles.css";
import GameArray from "./game/game.json";

import fireworkParticleConfig from "./particle-effect/Firework-Particle-Config";
import trailParticleConfig from "./particle-effect/Trail-Particle-Config";
import ClosedParticleConfig from "./particle-effect/Closed-Particle-Config";
import ExplosionParticleConfig from "./particle-effect/Explosion-Particle-Config"

// since whoReducer is just value, need a key to extract global value
const store = configureStore(
    {reducer: {who, exploretTuits, homeTuitsData, profile, review}});



function Tuiter() {

    let [backgroundParticle, setbackgroundParticle] = useState(snowParticleConfig);

    const particlesInit = useCallback(async engine => {
        //console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        //await console.log(container);
    }, []);


    const [vis, setVis] = useState(true);


    return (
        <Provider store={store}>
            <div className="row mt-2">

                {/*particle effect*/}
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={backgroundParticle}
                />



                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route path="/home" element={<TuitList/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/explore" element={<ExploreComponent/>}/>
                        <Route path="/search" element={<SearchComponent/>}/>
                        <Route path="/game/:RawgId" element={<GameComponent/>}/>
                        <Route path="/create-review" element={<CreateReview/>}/>
                        <Route path="/profile" element={<ProfileComponent/>}/>
                        <Route path="/edit-profile" element={<EditProfile/>}/>
                    </Routes>
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <Recommended_game/>
                </div>
            </div>

            {/*floating menu*/}
            <Fab alwaysShowTitle={true} icon="ℹ️">
                <Action text="Snow" onClick={() => setbackgroundParticle(snowParticleConfig)}>
                    ❄️
                </Action>
                {vis && (
                    <Action text="Firework" onClick={() => setbackgroundParticle(fireworkParticleConfig)}>
                        💥
                    </Action>
                )}
                <Action text="Trail" onClick={() => setbackgroundParticle(trailParticleConfig)}>
                    ⚡
                </Action>

                <Action text="Explode" onClick={() => setbackgroundParticle(ExplosionParticleConfig)}>
                    🎉
                </Action>

                <Action text="Close" onClick={() => setbackgroundParticle(ClosedParticleConfig)}>
                    🛑
                </Action>

            </Fab>

        </Provider>

    );
}

export default Tuiter

