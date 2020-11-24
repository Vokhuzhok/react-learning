import React from 'react';
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setPage, setUsersCount, toggleIsFetching } from "../../redux/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from '../common/Preloader';

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching (true);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, { withCredentials: true})
      .then((response) => {
        this.props.toggleIsFetching (false);
        this.props.setUsers(response.data.items);
        this.props.setUsersCount(response.data.totalCount);
      });
  }

  onPageChanged = (currentPage) => {
    this.props.toggleIsFetching (true);
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, { withCredentials: true})
    .then((response) => {
      this.props.toggleIsFetching (false);
      this.props.setUsers(response.data.items);
      this.props.setPage(currentPage);
    });
  }


  render(){ 
    return <>
    {this.props.isFetching ? <Preloader /> : null}
     <Users 
    users = {this.props.users}
    usersCount = {this.props.usersCount}
    pageSize =  {this.props.pageSize}
    currentPage = {this.props.currentPage}
    onPageChanged = {this.onPageChanged}
    follow = {this.props.follow}
    unfollow = {this.props.unfollow}
    />
    </>
  }
}

let mapStateToProps = (state) => {
  return { 
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    usersCount: state.usersPage.usersCount,
    currentPage: state.usersPage.currentPage,
    isFetching : state.usersPage.isFetching 
  };
};

export default connect(mapStateToProps, 
  {follow, unfollow, setUsers, setPage, setUsersCount, toggleIsFetching}) (UsersAPI);
