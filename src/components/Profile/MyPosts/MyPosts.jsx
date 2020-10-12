import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';
import { addPostActionCreator, updateNewTextPostActionCreator } from '../../../redux/profile-reducer';

const MyPost = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} likecount={p.likecount} />);

    let newPostElement = React.createRef();

    let newPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let postOnChange = () => {
        let text = newPostElement.current.value;
        props.dispatch (updateNewTextPostActionCreator(text));
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