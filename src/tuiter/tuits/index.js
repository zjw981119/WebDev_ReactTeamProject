import React from "react";
import * as tuitService from "../services/tuits-service";
import * as likesService from "../services/likes-service";
import TuitItem from "./tuit-item";
import {message} from "antd";
import {useNavigate} from "react-router-dom";

const Tuits = ({tuits = [], profile, refreshTuits}) => {
    const navigate = useNavigate();
    const likeTuit = (tuit) =>
        likesService
            .userLikesTuit("me", tuit._id)
            .then(refreshTuits)
            .catch((e) => navigate("/tuiter/login"));

    const deleteTuit = (tid) =>
        tuitService
            .deleteTuit(tid)
            .then(refreshTuits)
            .then(message.success("Delete Successfully!"));

    return (
        <div>
            <ul className="list-group border border-secondary">
                {
                    tuits.map(tuit =>
                        <TuitItem key={tuit._id}
                                  tuit={tuit}
                                  profile={profile}
                                  deleteTuit={deleteTuit}
                                  likeTuit={likeTuit}/>)
                }
            </ul>
        </div>
    );
};

export default Tuits;
