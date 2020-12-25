import React from "react";
import AddNewPostReduxForm from "./MyPostForm";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {
  let postsElements = props.profilePage.posts.map((p) => (
    <Post message={p.message} likecount={p.likecount} key={p.id} />
  ));

  let onSubmit = (formData) => {
    props.addPost(formData.addPost)
  };
  return (
    <div className={s.myposts}>
      <h3 className={s.headerPosts}>My Posts</h3>
      <div>
        <AddNewPostReduxForm onSubmit={onSubmit} />
      </div>
      <div className={s.postblock}>{postsElements}</div>
    </div>
  );
};

export default MyPost;
