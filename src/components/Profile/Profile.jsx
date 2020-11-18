import React from 'react';
import s from "./Profile.module.css";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileMain from './ProfileMain/ProfileMain';

const Profile = (props) => {
    return (
        <div className={s.mainprofile}>

            <ProfileMain profile = {props.profile} />

            <MyPostsContainer />
            
        </div>
    );
}

export default Profile;