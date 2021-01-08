import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src="https://i.pinimg.com/originals/65/b8/85/65b885158c187b7572be1b347dfaaf86.jpg"  alt=""/>
      {props.message}
      <div>
        <span>{props.likecount} Like</span>
      </div>
    </div>
  );
};

export default Post;
