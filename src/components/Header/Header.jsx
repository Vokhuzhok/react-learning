import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = ({userId, auth,login,logOut}) => {
  return (
    <header className={s.header}>
      <img src="http://www.usb-over-network.com/img/main/fabulatech-logo-1600.png" alt="Our site brand"/>
      {auth ? (
      <div>
        <NavLink to={`/profile/${userId}`}>{login}</NavLink> <button onClick = {logOut}>LogOut</button>
      </div>
      ) : (
        <div>
          <NavLink to={"/login"}>Login</NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
