import React from "react";
import User from "./User";
import Paginator from "../common/Paginator";
import Preloader from "../common/Preloader";
import s from "./Users.module.css";

let Users = (props) => {
  debugger;
  return (
    <div>
      <Paginator
        items={props.pages}
        currentItem={props.currentPage}
        onItemChanged={props.onPageChanged}
      />
      {props.isFetching ? (
        <div className={s.preloader}>
          <Preloader />
        </div>
      ) : (
        <User users={props.users} 
        follow={props.follow}
        unfollow={props.unfollow}/>
      )}
    </div>
  );
};

export default Users;
