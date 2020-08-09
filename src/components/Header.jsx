import React from 'react';
import s from "./Header.module.css";

const Header = () => {
  return (
    <header className={s.header}>
      <img src='http://www.usb-over-network.com/img/main/fabulatech-logo-1600.png'></img>
    </header>
  );
}

export default Header;