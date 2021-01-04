import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logOut } from "../../redux/reducers/auth-reducer";
import { getAuthCheck, getLogin, getUserId } from "../../redux/selectors/authSelector";

const HeaderContainer = ({login, auth, userId, logOut}) => {

  return (
     <Header 
     login={login}
     auth={auth}
     userId={userId}
     logOut={logOut}
      />
  )
}

let mapStateToProps = (state) => ({
  login: getLogin(state),
  auth: getAuthCheck(state),
  userId: getUserId(state)
});

export default connect(mapStateToProps, { logOut })(HeaderContainer);
