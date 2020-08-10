import React from 'react';
import s from "./MyPosts.module.css";

const MyPost = () => {
    return (
        <div className={s.MyPosts}>
            <div>My Posts</div>
            <textarea></textarea>
            <button>Add Post</button>
        </div>
    );
}

export default MyPost;