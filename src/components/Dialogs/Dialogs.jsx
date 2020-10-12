import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { addMessageActionCreator, updateNewMessageActionCreator } from '../../redux/dialogs-reduser';

const Dialogs = (props) => {
    
    let dialogElements = props.dialogsPage.dialogs.map(d => <Dialog ava={d.ava} name={d.name} id={d.id} />);

    let messageElements = props.dialogsPage.messages.map(m => <Message message={m.message} />)

    let addNewMessageRef = React.createRef();

    let updateNewMessage = () => {
        let Mtext=addNewMessageRef.current.value;
        props.dispatch (updateNewMessageActionCreator(Mtext));
    }

    let addNewMessage = () => {
        props.dispatch (addMessageActionCreator());
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div className={s.addMessage}>
                    <textarea 
                    value={props.dialogsPage.newMessage}
                    onChange={updateNewMessage}
                    ref={addNewMessageRef}/>
                    <button onClick={addNewMessage}>Add Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;