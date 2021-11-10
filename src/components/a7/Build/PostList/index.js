import React from "react";
import PostItem from "./PostItem.js";
import post from "./post.json";

const PostList = () => {
    return (
        <>
            <div class="row wd-lr-border ms-1 me-1 pt-2">
                {
        post.map(post => {
            return(<PostItem post={post}/>);
        })
    }

            </div>
            </>
); }
export default PostList;