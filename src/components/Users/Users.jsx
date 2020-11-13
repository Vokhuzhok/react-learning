import React from "react";
import s from "./Users.module.css";
import * as axios from "axios";
import noUserPhoto from "../../assest/images/User.png";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setUsersCount(response.data.totalCount);
      });
  }

  onPageChaged = (currentPage) => {
    this.props.setPage(currentPage);
    axios
    .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
    .then((response) => {
      this.props.setUsers(response.data.items);
    });
  }


  render() {

    let pageCount = Math.ceil(this.props.usersCount / this.props.pageSize);

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push (i);
    }

    return (
      <div>
        <div className = {s.pagesNumber}>
          {pages.map (p => {
          return <div className = {this.props.currentPage === p && s.selectedPage}
          onClick = {() => {this.onPageChaged (p);}} >{p}</div>
        })}
        </div>
        {this.props.users.map((ue) => (
          <div key={ue.id} className={s.users}>
            <div className={s.left}>
              <div className={s.ava}>
                <img
                  src={ue.photos.small != null ? ue.photos.small : noUserPhoto}
                />
              </div>
              <div>{ue.name}</div>
              <div className={s.button}>
                {ue.followed ? (
                  <button
                    onClick={() => {
                      this.props.unfollow(ue.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      this.props.follow(ue.id);
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div className={s.center}>
              <div className={s.status}>
                {ue.status != null ? ue.status : "No status"}
              </div>
            </div>
            <div className={s.right}>
              <div>{"city"}</div>
              <div>{"country"}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
