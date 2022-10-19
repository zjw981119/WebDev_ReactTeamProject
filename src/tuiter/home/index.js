import React from "react";
import postsArray from './posts.json';
import PostItem from "./post-item";

const PostList = () => {
    return (
        <ul className="list-group">
            {
                postsArray.map(post =>
                    <PostItem post={post}/>)
            }
        </ul>
    );
};
export default PostList;
