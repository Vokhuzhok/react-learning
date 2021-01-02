import MyPost from "./MyPosts";
import { addPost } from "../../../redux/reducers/profile-reducer";
import { connect } from "react-redux";
import { getProfilePosts } from "../../../redux/selectors/profileSelectors";

let mapStateToProps = (state) => {
  return { posts: getProfilePosts(state) };
};

const MyPostContainer = connect(mapStateToProps, {
  addPost,
})(MyPost);

export default MyPostContainer;
