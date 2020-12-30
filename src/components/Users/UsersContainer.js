import React from "react";
import { connect } from "react-redux";
import { follow, unfollow, uGet } from "../../redux/reducers/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import { getCurrentPage, getIsFetching, getPageSize, getUsers, getUsersCount } from "../../redux/selectors/userSelectors";

class UsersAPI extends React.Component {
  componentDidMount() {
    this.props.uGet(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (currentPage) => {
    this.props.uGet(currentPage, this.props.pageSize);
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
    users: getUsers(state),
    pageSize: getPageSize(state),
    usersCount: getUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
  };
};

export default connect(mapStateToProps, { follow, unfollow, uGet })(
  UsersAPI
);
