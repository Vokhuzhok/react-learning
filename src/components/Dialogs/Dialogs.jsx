import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialogs = () => {
    return(
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1' activeClassName={s.activeLink}>Dormidont</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/2' activeClassName={s.activeLink}>Assiriy</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/3' activeClassName={s.activeLink}>Sara</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/4' activeClassName={s.activeLink}>Solomon</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/5' activeClassName={s.activeLink}>Ivan</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/6' activeClassName={s.activeLink}>Yarik</NavLink>
                </div>
                <div className={s.dialog}>
                <NavLink to='/dialogs/7' activeClassName={s.activeLink}>Alise</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    Yo!
                </div>
                <div className={s.message}>
                   How are you?
                </div>
                <div className={s.message}>
                    Bye!
                </div>
            </div>
        </div>
    )
}

export default Dialogs;