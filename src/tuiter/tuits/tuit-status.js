import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../services/tuits-thunks";

const TuitStatus = ({tuitData}) => {
    const dispatch = useDispatch();
    const updateTuitHandler = (tuit) => {
        dispatch(updateTuitThunk(tuit));
    }
    return (
        // status
        <div className="row ps-2 pe-1 mt-3">
            {/* comment */}
            <div className="col">
                <i className="fa-regular fa-comment text-dark"/>
                <span className="text-dark ms-1">{tuitData.replies}</span>

            </div>

            {/* retweet */}
            <div className="col">
                <i className="fa-solid fa-retweet text-dark"/>
                <span className="text-dark ms-1">{tuitData.retuits}</span>

            </div>

            {/* likes */}
            <div className="col">
                <i className="fa-solid fa-heart text-danger"
                   onClick={() => updateTuitHandler(
                       {
                           ...tuitData,
                           likes: tuitData.likes + 1
                       })
                   }
                />
                <span className="text-dark ms-1">{tuitData.likes}</span>

            </div>

            {/* dislikes */}
            <div className="col">
                <i className="fa-solid fa-thumbs-down text-dark"
                   onClick={() => updateTuitHandler(
                       {
                           ...tuitData,
                           dislikes: tuitData.dislikes + 1
                       })
                   }
                />
                <span className="text-dark ms-1">{tuitData.dislikes}</span>

            </div>

            {/* upload */}
            <div className="col">
                <i className="fa-solid fa-arrow-up-from-bracket text-dark"/>
            </div>
        </div>
    );
};
export default TuitStatus;
