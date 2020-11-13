import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC, setPageAC, setUsersCountAC } from "../../redux/users-reducer";
import Users from "./Users";

let mapStateToProps = (state) => {
  return { 
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    usersCount: state.usersPage.usersCount,
    currentPage: state.usersPage.currentPage 
  };
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
    },
    setPage: (currentPage) => {
      dispatch(setPageAC(currentPage))
    },
    setUsersCount: (count) => {
      dispatch(setUsersCountAC(count))
    }
  };
};

const UsersContainer = connect(mapStateToProps, mapDispathToProps)(Users);

export default UsersContainer;
