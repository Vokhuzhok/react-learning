import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import Post from './MyPosts/Post/Post';

const Profile = () => {
    return (
        <div className={s.profile}>
            <div>
                <img src='https://im0-tub-ru.yandex.net/i?id=eaf56b9e7beb2e7d7b8d1f498d384ae6&n=13&exp=1'></img>
            </div>
            <div>
            <MyPosts />
            </div>
        </div>
    );
}

export default Profile;