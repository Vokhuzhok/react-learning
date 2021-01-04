import React from "react";
import s from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import AddMessageReduxForm from "./DialogsForm";

const Dialogs = (props) => {
  let dialogElements = props.dialogsPage.dialogs.map((d) => (
    <Dialog ava={d.ava} name={d.name} id={d.id} key={d.id} />
  ));

  let messageElements = props.dialogsPage.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let onSubmit = (formData) => {
    props.addMessage(formData.addMessage);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>{dialogElements}</div>
      <div className={s.messages}>
        {messageElements}
        <div className={s.addMessage}>
          <AddMessageReduxForm onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
