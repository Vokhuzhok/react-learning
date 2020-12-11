import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img src="http://www.usb-over-network.com/img/main/fabulatech-logo-1600.png" />
      {props.auth ? (
        props.login
      ) : (
        <div className={s.Login}>
          <NavLink to={"/login"}>Login</NavLink>
        </div>
      )}
    </header>
  );
};

export default Header;
