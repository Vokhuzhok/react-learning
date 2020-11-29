import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {

    if (!props.isAuth) return <Redirect to = '/login' />

    let dialogElements = props.dialogsPage.dialogs.map(d => <Dialog ava={d.ava} name={d.name} id={d.id} key={d.id}/>);

    let messageElements = props.dialogsPage.messages.map(m => <Message message={m.message} key={m.id} />)

    let addNewMessageRef = React.createRef();

    let updateNewMessage = () => {
        let Mtext=addNewMessageRef.current.value;
        props.updateNewMessage (Mtext);
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
                    <button onClick={props.addMessage}>Add Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;