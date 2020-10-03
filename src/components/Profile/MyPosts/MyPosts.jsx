import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPost = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likecount={p.likecount} />);

    let newPostElement = React.createRef();

    let newPost = () => {
        props.dispatch({type: 'ADD-POST'});
    }

    let postOnChange = () => {
        let text = newPostElement.current.value;
        props.dispatch ({type: 'UPDATE-NEW-TEXT-POST', newText: text});
    }
    return (
        <div className={s.myposts}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea
                    value = {props.newText}
                    onChange = {postOnChange}
                    ref={newPostElement}
                    />
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