import React from "react";
import { Field, reduxForm } from "redux-form";
import { authApi } from "../../api/api";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name="email" placeholder="E-mail" component="input" />
      </div>
      <div>
        <Field name="password" placeholder="Password" component="input" />
      </div>
      <div>
        <Field name="rememberMe" component="input" type="checkbox" /> Remember Me
      </div>
      <div>
       <button>Log In</button>
      </div>    
    </form>
  )
}

const LoginReduxForm = reduxForm({form: "login"})(LoginForm)



const Login = (props) => {

const onSubmit = (formData) => {
  authApi.postLogin(formData)
}

  return (
  <div>
    <h1>Login</h1>
  <LoginReduxForm onSubmit={onSubmit} />
  </div>
  )
};

export default Login;
