import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator } from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormControls";

const maxLength30 = maxLengthCreator(30);

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="addPost"
        placeholder="Add new post"
        component={Textarea}
        validate={[maxLength30]}
      />
      <button>Add Message</button>
    </form>
  );
};

const AddNewPostReduxForm = reduxForm({ form: "addMyPost" })(
    AddNewPostForm
  );

export default AddNewPostReduxForm;