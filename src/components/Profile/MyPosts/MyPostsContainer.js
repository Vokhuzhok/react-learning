import MyPost from "./MyPosts";
import { addPost } from "../../../redux/reducers/profile-reducer";
import { connect } from "react-redux";
import { getProfilePage } from "../../../redux/selectors/profileSelectors";

let mapStateToProps = (state) => {
  return { profilePage: getProfilePage(state) };
};

const MyPostContainer = connect(mapStateToProps, {
  addPost,
})(MyPost);

export default MyPostContainer;
