import React from 'react';
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileMain from './ProfileMain/ProfileMain';

const Profile = (props) => {
    return (
        <div className={s.mainprofile}>

            <ProfileMain />

            <MyPostsContainer 
           store = {props.store} 
           />
            
        </div>
    );
}

export default Profile;