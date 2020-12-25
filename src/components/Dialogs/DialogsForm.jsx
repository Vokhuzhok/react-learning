import React from "react";
import { Field, reduxForm } from "redux-form";

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="addMessage"
        placeholder="Add new message"
        component="textarea"
      />
      <button>Add Message</button>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({ form: "dialogAddMessage" })(
    AddMessageForm
  );

export default AddMessageReduxForm;
