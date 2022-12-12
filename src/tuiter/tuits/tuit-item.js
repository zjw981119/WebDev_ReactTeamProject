import React from "react";
import TuitStatus from "./tuit-status";

const TuitItem = ({tuit, profile, deleteTuit, likeTuit}) => {
    // TUITER-ADMIN can delete anything
    // other users can only delete the tuits of their own
    const canDeleteTuit = Object.keys(profile).length !== 0 &&
        (profile.accountType === 'TUITER-ADMIN' || tuit.postedBy.username === profile.username);
    // convert ISO date string into local time string
    const formattedDate = new Date(tuit.postedOn).toLocaleString();
    return (
        <li key={tuit._id} className="list-group-item">
            <div className="row">
                {/*left-part avatar*/}
                <div className="col-1">
                    <img className="rounded-circle"
                         src={`${tuit.postedBy.avatar}`}
                         width="40px"
                    />
                </div>
                {/* right-part post */}
                <div className="col-11">
                    {/* user */}
                    <div className="d-flex justify-content-between ps-2">
                        <div>
                            <div>
                                <span className="fw-bolder">{tuit.postedBy.username}</span>
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
