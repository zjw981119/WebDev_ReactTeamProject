import React from "react";
import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";
import WhatsHappening from "../home/whats-happening";

const HomeTuitsList = () => {
    const tuitsArray = useSelector(state => state.homeTuits)
    // console.log(tuitsArray)
    return (
        <>
            <WhatsHappening/>
            <ul className="list-group border border-secondary">
                {
                    tuitsArray.map(tuit =>
                        <TuitItem key={tuit._id} tuit={tuit}/>)
                }
            </ul>
        </>
    );
};
export default HomeTuitsList;