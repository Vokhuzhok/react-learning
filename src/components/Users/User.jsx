import React from "react";
import s from "./Users.module.css";
import noUserPhoto from "../../assest/images/User.png";
import { NavLink } from "react-router-dom";

const User = (props) => {
  return props.users.map((ue) => (
    <div key={ue.id} className={s.users}>
      <div className={s.left}>
        <div className={s.ava}>
          <NavLink to={"profile/" + ue.id}>
            <img
              src={ue.photos.small != null ? ue.photos.small : noUserPhoto}
            />
          </NavLink>
        </div>
        <div>{ue.name}</div>
        <div className={s.button}>
          {ue.followed ? (
            <button
              onClick={() => {
                props.unfollow(ue.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              onClick={() => {
                props.follow(ue.id);
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
  ));
};

export default User;