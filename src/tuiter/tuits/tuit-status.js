import React from "react";

const TuitStatus = ({tuit, likeTuit}) => {
    return (
        // status
        <div className="row ps-2 pe-1 mt-3">
            {/* comment */}
            <div className="col">
                <i className="fa-regular fa-comment text-dark"/>
                <span className="text-dark ms-1">{tuit.stats.replies}</span>

            </div>

            {/* retweet */}
            <div className="col">
                <i className="fa-solid fa-retweet text-dark"/>
                <span className="text-dark ms-1">{tuit.stats.retuits}</span>
            </div>

            {/* likes */}
            <div className="col">
                {
                    // if user like this tuit, then render thumbs-up coloblack black
                    tuit.isLiked &&
                        <i className="fa-solid fa-heart text-danger"
                           onClick={() => likeTuit(tuit)}
                        />
                }
                {
                    // user doesn't like this tuit
                    !tuit.isLiked &&
                    <i className="fa-solid fa-heart text-secondary"
                       onClick={() => likeTuit(tuit)}
                    />
                }
                <span className="text-dark ms-1">{tuit.stats.likes}</span>

            </div>

            {/* upload */}
            <div className="col">
                <i className="fa-solid fa-arrow-up-from-bracket text-dark"/>
            </div>
        </div>
    );
};
export default TuitStatus;
