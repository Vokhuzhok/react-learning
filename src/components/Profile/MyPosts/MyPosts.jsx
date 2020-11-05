import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPost = (props) => {
    let postsElements = props.profilePage.posts.map(p => 
    <Post message={p.message} 
    likecount={p.likecount} 
    key={p.id} />);

    let newPostElement = React.createRef();

    let newPost = () => {
        props.newPost();
    }

    let postOnChange = () => {
        let text = newPostElement.current.value;
        props.postOnChange(text);
    }
    return (
        <div className={s.myposts}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea
                    value = {props.profilePage.newText}
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