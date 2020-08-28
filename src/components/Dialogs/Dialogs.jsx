import React from 'react';
import s from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Dialogs = (props) => {
    
    let dialogElements = props.state.dialogs.map(d => <Dialog ava={d.ava} name={d.name} id={d.id} />);

    let messageElements = props.state.messages.map(m => <Message message={m.message} />)

    let addNewMessage = React.createRef();

    let addMessage = () => {
        let text=addNewMessage.current.value;
        alert(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messageElements}
                <div className={s.addMessage}>
                    <textarea ref={addNewMessage}></textarea>
                    <button onClick={addMessage}>Add Message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;