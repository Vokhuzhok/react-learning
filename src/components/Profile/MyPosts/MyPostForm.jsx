import React from "react";
import { Field, reduxForm } from "redux-form";

const AddNewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        name="addPost"
        placeholder="Add new post"
        component="textarea"
      />
      <button>Add Message</button>
    </form>
  );
};

const AddNewPostReduxForm = reduxForm({ form: "addMyPost" })(
    AddNewPostForm
  );

export default AddNewPostReduxForm;