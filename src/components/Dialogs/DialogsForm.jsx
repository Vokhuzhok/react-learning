import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator } from "../../utils/validators/validators";
import { Textarea } from "../common/FormControls";

const maxLength100 = maxLengthCreator(100);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="addMessage"
        placeholder="Add new message"
        component={Textarea}
        validate={[maxLength100]}
      />
      <button>Add Message</button>
    </form>
  );
};

const AddMessageReduxForm = reduxForm({ form: "dialogAddMessage" })(
    AddMessageForm
  );

export default AddMessageReduxForm;
