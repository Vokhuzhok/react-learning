import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC } from "../../redux/users-reducer";
import Users from "./Users";

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
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    }
  };
};

const UsersContainer = connect(mapStateToProps, mapDispathToProps)(Users);

export default UsersContainer;
