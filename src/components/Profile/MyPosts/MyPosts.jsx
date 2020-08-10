import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPost = () => {
    return (
        <div className={s.MyPosts}>
            <div>My Posts</div>
            <div>
                <textarea></textarea>
                <button>Add Post</button>
            </div>
            <div>
                <Post message="How are you?" likecount='30' />
                <Post message="It`s my first post" likecount='50' />
            </div>
        </div>
    );
}

export default MyPost;