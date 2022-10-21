import React from "react";

const TuitStatus = (
    {
        status = {
            "liked": false,
            "replies": 0,
            "retuits": 0,
            "likes": 0
        }
    }
) => {
    return (
        // status
        <div className="row ps-3 pe-3 mt-3">
            {/* comment */}
            <div className="col">
                <i className="fa-regular fa-comment" style={{"color": "gray"}}/>
                <span className="text-secondary ms-2">{status.replies}</span>

            </div>

            {/* retweet */}
            <div className="col">
                <i className="fa-solid fa-retweet" style={{"color": "gray"}}/>
                <span className="text-secondary ms-2">{status.retuits}</span>

            </div>

            {/* heart */}
            <div className="col">
                <i className="fa-solid fa-heart" style={{"color": status.liked ? "red" : "gray"}}/>
                <span className="text-secondary ms-2">{status.likes}</span>

            </div>

            {/* upload */}
            <div className="col">
                <i className="fa-solid fa-arrow-up-from-bracket" style={{"color": "grey"}}/>
            </div>
        </div>
    );
};
export default TuitStatus;
