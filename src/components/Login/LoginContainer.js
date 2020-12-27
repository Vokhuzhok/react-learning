import { connect } from "react-redux";
import {logIn, logOut} from "../../redux/auth-reducer"
import Login from "./Login";

let mapStateToProps = (state) => {
    return {auth: state.auth};
 }

export const LoginContainer = connect(mapStateToProps, {logIn, logOut}) (Login);
