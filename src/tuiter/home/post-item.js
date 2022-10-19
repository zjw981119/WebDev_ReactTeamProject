import React from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const PostItem = (
    {
        post = {
            "avatar": "/images/elonmusk.jpeg",
            "userName": "Elon Musk",
            "handle": "@elonmusk",
            "time": "23h",
            "leftComment": "Amazing show about",
            "linkComment": "@Inspiration4x",
            "rightComment": "mission",
            "title": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "paragraph": "From training to launch to landing. this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
            "website": "netflix.com",
            "image": "/images/inspiration4x.jpeg",
            "comments": "4.2K",
            "retweets": "3.5K",
            "likes": "37.5K"
        }
    }
) => {
    return(
        <li key={`id ${post.userName}`} className="list-group-item">
            <div className="row">
                {/*left-part avatar*/}
                <div className="col-1">
                    <img className="rounded-circle" src={post.avatar} width="40px"/>
                </div>
                {/* right-part post */}
                <div className="col-11">
                    {/* user */}
                    <div className="d-flex justify-content-between ps-2">
                        <div>
                            <div>
                                <span>{post.userName}</span>
                                <span className="text-secondary">{' ' + post.handle}</span>
                                <span className="text-secondary">{' - ' + post.time}</span>
                            </div>
                        </div>
                        <div>
                            <span className="text-secondary">•••</span>
                        </div>
                    </div>
                    <div className="ps-2">
                        <span>{post.leftComment}</span>
                        <span className="text-primary">{' ' + post.linkComment}</span>
                        <span>{' ' + post.rightComment}</span>
                    </div>

                    {/* article */}
                    <div className="card mt-2">
                        <img src={post.image} className="card-img-top rounded-top border border-1 border-secondary"
                             alt="..."/>
                            {!(post.title === '' && post.paragraph === '' && post.website === '')
                                && <div id="card-body" className="card-body border border-1 border-secondary">
                                    <div className="card-title" style={{"fontSize": "16px"}}>{post.title}</div>
                                    <div className="card-text text-secondary">{post.paragraph}</div>
                                    <div className="text-secondary mt-1">{post.website}</div>
                                </div>
                            }
                    </div>

                    {/* status */}
                    <div className="d-flex justify-content-between ps-3 pe-3 mt-3">
                        {/* comment */}
                        <div>
                            <i className="fa-regular fa-comment" style={{"color": "gray"}} />
                            <span className="text-secondary ms-2">{post.comments}</span>
                        </div>

                        {/* retweet */}
                        <div>
                            <i className="fa-solid fa-retweet" style={{"color": "gray"}}/>
                            <span className="text-secondary ms-2">{post.retweets}</span>
                        </div>

                        {/* heart */}
                        <div>
                            <i className="fa-solid fa-heart" style={{"color": "gray"}}/>
                            <span className="text-secondary ms-2">{post.likes}</span>
                        </div>

                        {/* upload */}
                        <div>
                            <i className="fa-solid fa-arrow-up-from-bracket" style={{"color": "grey"}}/>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
export default PostItem;
