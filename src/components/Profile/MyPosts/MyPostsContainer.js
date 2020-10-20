import React from 'react';
import MyPost from "./MyPosts";
import { addPostActionCreator, updateNewTextPostActionCreator } from '../../../redux/profile-reducer';

const MyPostContainer = (props) => {

    let state = props.store.getState().profilePage;

    let newPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let postOnChange = (text) => {
        props.store.dispatch (updateNewTextPostActionCreator(text));
    }
    return <MyPost newPost = {newPost} postOnChange = {postOnChange} state = {state} />
}

export default MyPostContainer;