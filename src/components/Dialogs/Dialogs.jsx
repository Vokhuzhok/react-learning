import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const Dialog = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.activeLink}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <Dialog name="Dormidont" id="1" />
                <Dialog name="Assiry" id="2" />
                <Dialog name="Sara" id="3" />
                <Dialog name="Solomon" id="4" />
                <Dialog name="Ivan" id="5" />
                <Dialog name="Yarik" id="6" />
                <Dialog name="Alise" id="7" />
            </div>
            <div className={s.messages}>
                <Message message="Hi!" />
                <Message message="How are you?" />
                <Message message="Yo!" />
                <Message message="Yo!" />
            </div>
        </div>
    )
}

export default Dialogs;