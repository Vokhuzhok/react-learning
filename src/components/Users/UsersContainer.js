import Users from "./Users";
import { connect } from "react-redux";
import { followAC, unfollowAC } from "../../redux/users-reducer";

let mapStateToProps = (state) => {
  return { usersPage: state.usersPage };
};

let mapDispathToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispathToProps)(Users);

export default UsersContainer;
