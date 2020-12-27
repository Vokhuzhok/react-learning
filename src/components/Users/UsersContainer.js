import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, getUsers } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (currentPage) => {
    this.props.getUsers(currentPage, this.props.pageSize);
  };

  render() {
    return (
      <>
      {this.props.isFetching ? <Preloader/> : null}
        <Users
          users={this.props.users}
          usersCount={this.props.usersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    usersCount: state.usersPage.usersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};

export default connect(mapStateToProps, { follow, unfollow, getUsers })(
  UsersAPI
);
