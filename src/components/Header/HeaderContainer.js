import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logOut } from "../../redux/reducers/auth-reducer";
import { getAuthCheck, getLogin } from "../../redux/selectors/authSelector";

class HeaderContainer extends React.Component {

  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => ({
  login: getLogin(state),
  auth: getAuthCheck(state),
});

export default connect(mapStateToProps, { logOut })(HeaderContainer);
