import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileMain from "./ProfileMain/ProfileMain";

const Profile = (props) => {
  return (
    <div>
      <ProfileMain profile={props.profile} />

      <MyPostsContainer />
    </div>
  );
};

export default Profile;
