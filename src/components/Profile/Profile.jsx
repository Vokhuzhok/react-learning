import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileMain from './ProfileMain/ProfileMain';

const Profile = (props) => {
    return (
        <div>
            <ProfileMain />
            <MyPosts posts={props.posts} />
        </div>
    );
}

export default Profile;