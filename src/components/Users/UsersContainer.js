import Users from "./Users";
import { connect } from "react-redux";
import { followAC, unfollowAC } from "../../redux/users-reducer";

let mapStateToProps = (state) => {
  return { users: state.usersPage.users };
};

let mapDispathToProps = (dispatch) => {
  return {
    follow: (id) => {
      dispatch(followAC(id));
    },
    unfollow: (id) => {
      dispatch(unfollowAC(id));
    }
  };
};

const UsersContainer = connect(mapStateToProps, mapDispathToProps)(Users);

export default UsersContainer;
