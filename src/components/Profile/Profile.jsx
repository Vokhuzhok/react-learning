import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileMain from './ProfileMain/ProfileMain';

const Profile = (props) => {
    return (
        <div className={s.mainprofile}>

            <ProfileMain />

            <MyPosts 
            posts={props.profilePage.posts}
            dispatch = {props.dispatch} />
            
        </div>
    );
}

export default Profile;