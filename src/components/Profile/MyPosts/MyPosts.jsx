import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPost = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likecount={p.likecount} />);

    let newPostElement = React.createRef();

    let newPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }
    return (
        <div className={s.myposts}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={newPost}>Add Post</button>
                </div>
            </div>
            <div className={s.postblock}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPost;