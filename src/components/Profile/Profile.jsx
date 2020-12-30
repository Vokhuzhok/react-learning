import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileMain from "./ProfileMain/ProfileMain";

const Profile = (props) => {
  return (
    <div>
      <ProfileMain profile={props.profile}  status={props.status} updateUserStatus={props.updateUserStatus} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
