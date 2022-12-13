import React from "react";
import TuitStatus from "./tuit-status";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const TuitItem = ({tuit, profile, deleteTuit, likeTuit}) => {
    // TUITER-ADMIN can delete anything
    // other users can only delete the tuits of their own
    const navigate = useNavigate();
    const canDeleteTuit = Object.keys(profile).length !== 0 &&
        (profile.accountType === 'TUITER-ADMIN' || tuit.postedBy.username === profile.username);
    // convert ISO date string into local time string
    const formattedDate = new Date(tuit.postedOn).toLocaleString();
    return (
        <li key={tuit._id} className="list-group-item">
            <div className="row">
                {/*left-part avatar*/}
                <div className="col-1">
                    <Link to={`/tuiter/profile/${tuit.postedBy._id}`}>
                        <img className="rounded-circle"
                             src={`/images/${tuit.postedBy.username}.png`}
                             width="40px"/>
                    </Link>
                </div>
                {/* right-part post */}
                <div className="col-11">
                    {/* user */}
                    <div className="d-flex justify-content-between ps-2">
                        <div>
                            <div>
                                <Link className="text-decoration-none" to={`/tuiter/profile/${tuit.postedBy._id}`}>
                                    <span className="fw-bolder">{tuit.postedBy.username}</span>
                                </Link>
                                <span className="text-secondary">{' ' + tuit.postedBy.username}</span>
                                <span className="text-secondary">{' - ' + formattedDate}</span>
                            </div>
                        </div>
                        {
                            canDeleteTuit &&
                            <i className="bi bi-x-lg"
                               onClick={() => deleteTuit(tuit._id)}/>
                        }
                    </div>
                    <div className="ps-2">
                        {tuit.tuit}
                    </div>
                    {/* delete tuit */}

                    <TuitStatus tuit={tuit}
                                likeTuit={likeTuit}
                    />
                </div>
            </div>
        </li>
    );
};
export default TuitItem;
