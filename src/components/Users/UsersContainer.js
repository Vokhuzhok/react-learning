import React from 'react';
import { connect } from "react-redux";
import { followAC, unfollowAC, setUsersAC, setPageAC, setUsersCountAC } from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";

class UsersAPI extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (currentPage) => {
    this.props.setPage(currentPage);
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    .then((response) => {
      this.props.setUsers(response.data.items);
    });
  }


  render(){ 
    return <Users 
    users = {this.props.users}
    usersCount = {this.props.usersCount}
    pageSize =  {this.props.pageSize}
    currentPage = {this.props.currentPage}
    onPageChanged = {this.onPageChanged}
    follow = {this.props.follow}
    unfollow = {this.props.unfollow}
    />
  }
}

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

const UsersContainer = connect(mapStateToProps, mapDispathToProps)(UsersAPI);

export default UsersContainer;
