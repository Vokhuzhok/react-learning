import React from 'react';
import Dialogs from './Dialogs';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reduser';

const DialogsContainer = (props) => {
    
    let state = props.store.getState().dialogsPage;
    
    let updateNewMessage = (Mtext) => {
        props.store.dispatch (updateNewMessageActionCreator(Mtext));
    }

    let addNewMessage = () => {
        props.store.dispatch (addMessageActionCreator());
    }

    return <Dialogs updateNewMessage = {updateNewMessage} addNewMessage = {addNewMessage} state = {state} />;
}

export default DialogsContainer;