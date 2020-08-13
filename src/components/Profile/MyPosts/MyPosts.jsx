import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPost = () => {
    return (
        <div className={s.myposts}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.postblock}>
                <Post message="How are you?" likecount='30' />
                <Post message="It`s my first post" likecount='50' />
            </div>
        </div>
    );
}

export default MyPost;