import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileMain from './ProfileMain/ProfileMain';

const Profile = () => {
    return (
        <div>
            <ProfileMain />
            <MyPosts />
        </div>
    );
}

export default Profile;