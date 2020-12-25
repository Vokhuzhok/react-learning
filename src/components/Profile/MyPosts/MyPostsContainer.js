import MyPost from "./MyPosts";
import { addPost } from "../../../redux/profile-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return { profilePage: state.profilePage };
};

const MyPostContainer = connect(mapStateToProps, {
  addPost,
})(MyPost);

export default MyPostContainer;
