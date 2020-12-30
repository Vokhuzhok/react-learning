import React from "react";
import { connect } from "react-redux";
import Profile from "../Profile";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../../redux/reducers/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { getProfile, getStatus } from "../../../redux/selectors/profileSelectors";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (this.props.profile === null) {userId = 12751} ;
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return <Profile {...this.props} 
    profile={this.props.profile} 
    status={this.props.status} 
    updateStatus={this.props.updateStatus} 
    />;
  }
}

let mapStateToProps = (state) => ({
  profile:getProfile(state),
  status: getStatus(state)
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
