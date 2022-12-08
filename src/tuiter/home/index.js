import React, {useEffect, useState} from "react";
import WhatsHappening from "./whats-happening";
import * as secureService from "../services/security-service";
import * as tuitService from "../services/tuits-service";
import Tuits from "../tuits";


const HomeTuitsList = () => {
    const [tuits, setTuits] = useState([]);
    const [profile, setProfile] = useState({});
    const [isLoggedIn, setUserStat] = useState(false);

    // retrieve all tuits
    const findTuits = () =>
        tuitService.findAllTuits()
            .then(tuits => setTuits(tuits));

    useEffect(() => {
        findTuits();
    }, []);

    // retrieve the currently logged in user
    useEffect(() => {
        async function getProfile() {
            const user = await secureService.profile();
            if (Object.keys(user).length === 0) setUserStat(false);
            else setUserStat(true);
            //console.log("user", user)
            setProfile(user);
        }

        getProfile();
    }, []);

    return (
        <>
            {/*// only anonymous user && personal user can create tuit*/}
            {/*// (!isLoggedIn || profile.accountType === 'PERSONAL') &&*/}
            <WhatsHappening
                isLoggedIn={isLoggedIn}
                profile={profile}
                refreshTuits={findTuits}
            />


            <Tuits tuits={tuits}
                   profile={profile}
                   refreshTuits={findTuits}/>
        </>
    );
};
export default HomeTuitsList;