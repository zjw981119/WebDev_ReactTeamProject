import React from "react";
import PostSummaryItem from "./post-summary-item";
import {useSelector} from "react-redux";

const PostSummaryList = () => {
    const postsArray = useSelector(state => state.exploretTuits)
    // console.log(postsArray)
    return (
        <ul className="list-group border border-secondary">
            {
                postsArray.map(post =>
                    <PostSummaryItem key={post._id} post={post}/>)
            }
        </ul>
    );
};
export default PostSummaryList;
