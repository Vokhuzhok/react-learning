import React from 'react';
import Preloader from '../../common/Preloader';
import s from './ProfileMain.module.css';

const ProfileMain = (props) => {

   if (!props.profile) {
       return <Preloader />
   }

    return (
        <div>
            <div className={s.profile}>
                <img src='https://im0-tub-ru.yandex.net/i?id=eaf56b9e7beb2e7d7b8d1f498d384ae6&n=13&exp=1'></img>
            </div>
            <div>
                <img src = {props.profile.photos.large} />
            </div>
        </div>
    );
}

export default ProfileMain;