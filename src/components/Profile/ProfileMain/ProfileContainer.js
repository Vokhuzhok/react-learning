import React, { useEffect } from "react";
import { connect } from "react-redux";
import Profile from "../Profile";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../../redux/reducers/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { getProfile, getStatus } from "../../../redux/selectors/profileSelectors";
import { getUserId } from "../../../redux/selectors/authSelector";

// class ProfileContainer extends React.Component {
//   componentDidMount() {
//     let userId = this.props.match.params.userId;
//     if (this.props.profile === null) {userId = 12751} ;
//     this.props.getUserProfile(userId);
//     this.props.getUserStatus(userId);
//   }

//   render() {
//     return <Profile {...this.props} 
//     profile={this.props.profile} 
//     status={this.props.status} 
//     updateUserStatus={this.props.updateUserStatus} 
//     />;
//   }
// }

const ProfileContainer = ({profile, 
  getUserProfile, 
  getUserStatus, 
  updateUserStatus, 
  status, 
  authId, 
  ...props}) => {

  let userId = props.match.params.userId;
  if (profile === null || userId === undefined) {userId = authId}

  useEffect(() => {
    getUserProfile(userId)
  }, [getUserProfile, userId]);

  useEffect (() => {
    getUserStatus(userId)
  }, [getUserStatus, userId])

  return (
    <Profile
    authId = {authId}
    profile = {profile}
    status = {status}
    updateUserStatus = {updateUserStatus}
    />
    )
  
}

let mapStateToProps = (state) => ({
  profile:getProfile(state),
  status: getStatus(state),
  authId: getUserId(state)
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
