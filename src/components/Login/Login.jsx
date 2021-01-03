import React from "react";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { requred } from "../../utils/validators/validators";
import { Input } from "../common/FormControls";
import s from "../common/FormControls.module.css";

const LoginForm = ({handleSubmit, error}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="email" placeholder="E-mail" component={Input} validate={[requred]}/>
      </div>
      <div>
        <Field name="password" placeholder="Password" component={Input} validate = {[requred]} type="password"/>
      </div>
      <div>
        <Field name="rememberMe" component="input" type="checkbox" /> Remember Me
      </div>
      { error && <div className={s.errorForm}>{error}</div>}
      <div>
       <button>Log In</button>
      </div>    
    </form>
  )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)



const Login = (props) => {

const onSubmit = (formData) => {
  props.logIn(formData.email, formData.password, formData.rememberMe);
}

if (props.auth.auth) {return ( <Redirect to = "/profile" /> )}

  return (
  <div>
    <h1>Login</h1>
  <LoginReduxForm onSubmit={onSubmit} />
  </div>
  )
};

export default Login;
