import NavigationSidebar from "./navigation-sidebar";
import ExploreComponent from "./explore/index";
import SearchComponent from "./search/index";
import {Routes, Route} from "react-router";
import homeTuitsData from "./reducers/home-tuits-reducer";
import profile from "./reducers/profile-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import ProfileComponent from "./profile";
import GameComponent from "./game/index";
import EditProfile from "./profile/edit-profile";
import CreateReview from "./review/create-review";
import Recommended_game from "./recommeded_game";
import Home from "./home";
import Login from "./authentication";
import Register from "./authentication/register";

import {useCallback, useEffect} from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { ParticleEffectFab, Action,  BackgroundColorFab} from "./floating-Menu/index";
import React, {useState} from "react";
import "react-tiny-fab/dist/styles.css";

import snowParticleConfig from "./particle-effect/Snow-Particle-Config";
import fireworkParticleConfig from "./particle-effect/Firework-Particle-Config";
import trailParticleConfig from "./particle-effect/Trail-Particle-Config";
import ClosedParticleConfig from "./particle-effect/Closed-Particle-Config";
import ExplosionParticleConfig from "./particle-effect/Explosion-Particle-Config"
import AboutUsComponent from "./about-us/about-us";
import Linkedin from "./about-us/linkedin";


// since whoReducer is just value, need a key to extract global value
const store = configureStore(
    {reducer: { homeTuitsData, profile}});



function Tuiter() {

    let [backgroundParticle, setbackgroundParticle] = useState(snowParticleConfig);
    let [CurrbackgroundIndex, setCurrbackgroundIndex] = useState(4);
    let ParticleList = [fireworkParticleConfig, trailParticleConfig, ClosedParticleConfig, ExplosionParticleConfig, snowParticleConfig]

    const particlesInit = useCallback(async engine => {
        //console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        //await console.log(container);
    }, []);


    const [vis, setVis] = useState(true);


    useEffect(() => {

        setCurrbackgroundIndex(ParticleList.indexOf(backgroundParticle));

    }, [backgroundParticle])


    async function ToBlueBackground()
    {
        try{
            for(let i in ParticleList)
            {
                ParticleList[i].background.color.value = "#212d69";
            }


        }
        catch{
            console.log("Fail to change")
        }
    }

    async function ToRedBackground()
    {
        try{
            for(let i in ParticleList)
            {
                ParticleList[i].background.color.value = "#5b1111";
            }


        }
        catch{
            console.log("Fail to change")
        }
    }

    async function ToGreenBackground()
    {
        try{
            for(let i in ParticleList)
            {
                ParticleList[i].background.color.value = "#053612";
            }

        }
        catch{
            console.log("Fail to change")
        }
    }

    async function ToGreyBackground()
    {
        try{
            for(let i in ParticleList)
            {
                ParticleList[i].background.color.value = "#1c1919";
            }
        }
        catch{
            console.log("Fail to change")
        }
    }

    async function ToPurpleBackground()
    {
        try{
            for(let i in ParticleList)
            {
                ParticleList[i].background.color.value = "#320838";
            }
        }
        catch{
            console.log("Fail to change")
        }
    }

    async function ToDefaultBackground()
    {
        try{
            for(let i in ParticleList)
            {
                ParticleList[i].background.color.value = "#000000";
            }

        }
        catch{
            console.log("Fail to change")
        }
    }




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
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/register" element={<Register/>}/>
                        <Route path="/explore" element={<ExploreComponent/>}/>
                        <Route path="/search" element={<SearchComponent/>}/>
                        <Route path="/game/:RawgId" element={<GameComponent/>}/>
                        <Route path="/create-review" element={<CreateReview/>}/>
                        <Route path="/aboutus" element={<AboutUsComponent/>}/>
                        <Route path="/profile" element={<ProfileComponent/>}/>
                        <Route path="/edit-profile" element={<EditProfile/>}/>
                    </Routes>
                </div>
                <div className="d-none d-lg-block col-lg-4 col-xl-4">
                    <Routes>
                        <Route path="/home" element={<Recommended_game/>}/>
                        <Route path="/login" element={<Recommended_game/>}/>
                        <Route path="/register" element={<Recommended_game/>}/>
                        <Route path="/explore" element={<Recommended_game/>}/>
                        <Route path="/search" element={<Recommended_game/>}/>
                        <Route path="/game/:RawgId" element={<Recommended_game/>}/>
                        <Route path="/create-review" element={<Recommended_game/>}/>
                        <Route path="/aboutus" element={<Linkedin/>}/>
                        <Route path="/profile" element={<Recommended_game/>}/>
                        <Route path="/edit-profile" element={<Recommended_game/>}/>
                    </Routes>
                </div>
            </div>

            {/*floating menu*/}
            <ParticleEffectFab alwaysShowTitle={true} icon="⚙️">
                <Action text="Snow" onClick={() => setbackgroundParticle(snowParticleConfig)}>
                    ❄️
                </Action>
                {vis && (
                    <Action text="Side Confetti" onClick={() => setbackgroundParticle(fireworkParticleConfig)}>
                        🎉
                    </Action>
                )}
                <Action text="Trail" onClick={() => setbackgroundParticle(trailParticleConfig)}>
                    ⚡
                </Action>

                <Action text="Explode" onClick={() => setbackgroundParticle(ExplosionParticleConfig)}>
                    💥
                </Action>

                <Action text="Stop" onClick={() => setbackgroundParticle(ClosedParticleConfig)}>
                    🛑
                </Action>

            </ParticleEffectFab>

            {/*floating menu*/}
            <BackgroundColorFab alwaysShowTitle={true} icon="🎨️">
                <Action text="Default" onClick={() => ToDefaultBackground()}>
                    ⬛
                </Action>
                {vis && (
                    <Action text="Red" onClick={() => ToRedBackground()}>
                        🟥
                    </Action>
                )}
                <Action text="Blue" onClick={() => ToBlueBackground()}>
                    🟦
                </Action>

                <Action text="Green" onClick={() => ToGreenBackground()}>
                    🟩
                </Action>

                <Action text="Purple" onClick={() => ToPurpleBackground()}>
                    🟪
                </Action>

                <Action text="Grey" onClick={() => ToGreyBackground()}>
                    🌫️
                </Action>

            </BackgroundColorFab>

        </Provider>

    );
}

export default Tuiter

