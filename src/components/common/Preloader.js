import React from "react";
import preloader from "../../assest/images/Preloader.gif";

let Preloader = (props) => {
  return (
    <span>
      <img src={preloader} />
    </span>
  );
};

export default Preloader;
