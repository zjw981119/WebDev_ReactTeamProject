import {useEffect, useState} from "react";
import {findAllTuitsLikedByUser} from "../../../services/likes-service";
import Tuits from "../../../tuits";
import {ObjectID} from "bson";
import {useParams} from "react-router";
import * as userService from "../../../services/user-service";

export const UserLikes = () => {
    const {uid} = useParams();
    const [profile, setProfile] = useState({});
    const [likes, setLikes] = useState([]);
    // retrieve the currently logged in user
    const fetchLikes = async () => {
        if (uid) {
            // get logged in user info
            const user = await userService.profile();
            setProfile(user);
            // if not logged in create an _id for anonymous user,
            const reviewerId = Object.keys(user).length !== 0 ? user._id : new ObjectID();
            const likes = await findAllTuitsLikedByUser(reviewerId, uid);
            setLikes(likes);
        }
    }

    useEffect(() => {
        fetchLikes();
    }, [uid]);

    return (
        <div>
            <Tuits tuits={likes} refreshTuits={fetchLikes} profile={profile}/>
        </div>
    )
}
