import React from 'react';
import { connect } from "react-redux";
import { follow, unfollow, setUsers, setPage, setUsersCount, toggleIsFetching } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from '../common/Preloader';
import { userApi } from '../../api/api';

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching (true);
    userApi.getUsers(this.props.currentPage, this.props.pageSize)
      .then((data) => {
        this.props.toggleIsFetching (false);
        this.props.setUsers(data.items);
        this.props.setUsersCount(data.totalCount);
      });
  }

  onPageChanged = (currentPage) => {
    this.props.toggleIsFetching (true);
    userApi.getUsers(this.props.currentPage, this.props.pageSize)
    .then((data) => {
      this.props.toggleIsFetching (false);
      this.props.setUsers(data.items);
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
