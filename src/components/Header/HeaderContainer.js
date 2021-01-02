import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logOut } from "../../redux/reducers/auth-reducer";
import { getAuthCheck, getLogin, getUserId } from "../../redux/selectors/authSelector";

const HeaderContainer = (props) => {

  return (
     <Header 
     login={props.login}
     auth={props.auth}
     userId={props.userId}
     logOut={props.logOut}
      />
  )
}

let mapStateToProps = (state) => ({
  login: getLogin(state),
  auth: getAuthCheck(state),
  userId: getUserId(state)
});

export default connect(mapStateToProps, { logOut })(HeaderContainer);
