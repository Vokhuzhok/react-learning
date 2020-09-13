import React from 'react';
import s from "./Navigation.module.css";
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}>Settings</NavLink>
            </div>
            <div className={s.friends}>
                <NavLink to='/friends' activeClassName={s.activeFriend}>Friends</NavLink>
            </div>
            <div className={s.friendsAva}>
             <div>
                 <img src={props.dialogsPage.dialogs[1].ava} />
             </div>
             <div>
                <img src={props.dialogsPage.dialogs[2].ava} />
             </div>
             <div>
                <img src={props.dialogsPage.dialogs[3].ava} />
             </div>
            </div>
        </nav>
    );
}

export default Navigation;