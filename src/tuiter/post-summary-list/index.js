import React from "react";
import postsArray from './posts.json';
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
    return (
        <ul className="list-group border border-secondary">
            {
                postsArray.map(post =>
                    <PostSummaryItem post={post}/>)
            }
        </ul>
    );
};
export default PostSummaryList;
