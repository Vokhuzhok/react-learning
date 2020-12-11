import MyPost from "./MyPosts";
import { addPost, updateNewTextPost } from "../../../redux/profile-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return { profilePage: state.profilePage };
};

const MyPostContainer = connect(mapStateToProps, {
  addPost,
  updateNewTextPost,
})(MyPost);

export default MyPostContainer;
