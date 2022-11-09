import React, {useEffect} from "react";
import TuitItem from "./tuit-item";
import {useDispatch, useSelector} from "react-redux";
import WhatsHappening from "../home/whats-happening";
import {findTuitsThunk} from "../services/tuits-thunks";
import homeTuitsData from "../reducers/home-tuits-reducer";

const HomeTuitsList = () => {
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])
    // grab tuits and loading flag from reducer
    const {tuits, loading} = useSelector(state => state.homeTuitsData)
    console.log(tuits);
    const dispatch = useDispatch();


    return (
        <>
            <WhatsHappening/>
            <ul className="list-group border border-secondary">
                {
                    // if loading flag is true, then show a loading message while data is still
                    // coming back from the server
                    loading &&
                    <li className="list-group-item">
                        Loading...
                    </li>
                }
                {
                    tuits.map(tuit =>
                        <TuitItem key={tuit._id} tuit={tuit}/>)
                }
            </ul>
        </>
    );
};
export default HomeTuitsList;