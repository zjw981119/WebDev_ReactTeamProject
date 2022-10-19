import React from "react";
import whoArray from './who.json';
import WhoToFollowListItem
    from "./who-to-follow-list-item";

const WhoToFollowList = () => {
    return(
        <ul className="list-group">
            {
                whoArray.map(who =>
                    <WhoToFollowListItem who={who}/>)
            }
        </ul>
    );
};

export default WhoToFollowList;
