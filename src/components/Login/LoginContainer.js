import { connect } from "react-redux";
import {logIn, logOut} from "../../redux/reducers/auth-reducer"
import { getAuth } from "../../redux/selectors/authSelector";
import Login from "./Login";

let mapStateToProps = (state) => {
    return {auth: getAuth(state)};
 }

export const LoginContainer = connect(mapStateToProps, {logIn, logOut}) (Login);
