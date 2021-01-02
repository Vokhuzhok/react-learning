import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { follow, unfollow, uGet } from "../../redux/reducers/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader";
import {
  getIsFetching,
  getPageSize,
  getUsers,
  getUsersCount,
} from "../../redux/selectors/userSelectors";

// class UsersAPI extends React.Component {
//   componentDidMount() {
//     this.props.uGet(this.props.currentPage, this.props.pageSize);
//   }

//   onPageChanged = (currentPage) => {
//     this.props.uGet(currentPage, this.props.pageSize);
//   };

//   render() {
//     return (
//       <>
//       {this.props.isFetching ? <Preloader/> : null}
//         <Users
//           users={this.props.users}
//           usersCount={this.props.usersCount}
//           pageSize={this.props.pageSize}
//           currentPage={this.props.currentPage}
//           onPageChanged={this.onPageChanged}
//           follow={this.props.follow}
//           unfollow={this.props.unfollow}
//         />
//       </>
//     );
//   }
// }

const UsersAPI = (props) => {

  let [pages, setPages] = useState([])

  let [currentPage, setCurrentPage] = useState(1);

  let onPageChanged = (currentPage) => {
    setCurrentPage(currentPage);
  };

    useEffect(() => {
    props.uGet(currentPage, props.pageSize);
  },[currentPage, props.pageSize]);

  useEffect(() => {
    pages=[];
    let pageCount = Math.ceil(props.usersCount / props.pageSize);
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
    setPages(pages)
  }, [props.usersCount, props.pageSize])

  return (
    <>
      {props.isFetching ? (
        <Preloader />
      ) : (
        <Users
          users={props.users}
          pages={pages}
          currentPage={currentPage}
          onPageChanged={onPageChanged}
          follow={props.follow}
          unfollow={props.unfollow}
        />
      )}
    </>
  );
};

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    usersCount: getUsersCount(state),
    isFetching: getIsFetching(state),
  };
};

export default connect(mapStateToProps, { follow, unfollow, uGet })(UsersAPI);
