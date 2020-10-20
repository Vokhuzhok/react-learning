import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
    
    let dialogElements = props.state.dialogs.map(d => <Dialog ava={d.ava} name={d.name} id={d.id} />);

    let messageElements = props.state.messages.map(m => <Message message={m.message} />)

    let addNewMessageRef = React.createRef();

    let updateNewMessage = () => {
        let Mtext=addNewMessageRef.current.value;
        props.updateNewMessage (Mtext);
    }

    let addNewMessage = () => {
        props.addNewMessage ();
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
                    value={props.state.newMessage}
                    onChange={updateNewMessage}
                    ref={addNewMessageRef}/>
                    <button onClick={addNewMessage}>Add Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;