import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { follow, unfollow, uGet } from "../../redux/reducers/users-reducer";
import Users from "./Users";
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

const UsersAPI = ({uGet, pageSize, usersCount, isFetching, users, follow, unfollow}) => {

  let [pages, setPages] = useState([])

  let [currentPage, setCurrentPage] = useState(1);

  let onPageChanged = (currentPage) => {
    setCurrentPage(currentPage);
  };

    useEffect(() => {
    uGet(currentPage, pageSize);
  },[uGet, currentPage, pageSize]);

  useEffect(() => {
    pages=[];
    let pageCount = Math.ceil(usersCount / pageSize);
    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
    setPages(pages)
  }, [usersCount, pageSize])

  return (
    <>
        <Users
          users={users}
          pages={pages}
          currentPage={currentPage}
          onPageChanged={onPageChanged}
          follow={follow}
          unfollow={unfollow}
          isFetching={isFetching}
        />
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
