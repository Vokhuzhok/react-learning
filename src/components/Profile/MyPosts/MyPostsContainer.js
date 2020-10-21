import React from "react";
import MyPost from "./MyPosts";
import {
  addPostActionCreator,
  updateNewTextPostActionCreator,
} from "../../../redux/profile-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return { profilePage: state.profilePage };
};

let mapDispathToProps = (dispatch) => {
  return {
    newPost: () => {
      dispatch(addPostActionCreator());
    },
    postOnChange: (text) => {
      dispatch(updateNewTextPostActionCreator(text));
    },
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispathToProps)(MyPost);

export default MyPostContainer;
