import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileMain from "./ProfileMain/ProfileMain";

const Profile = (props) => {
  const vid = window.screen.availWidth + "*" + window.screen.availHeight
  return (
    <div>
      <ProfileMain 
      authId={props.authId}
      profile={props.profile}  
      status={props.status} 
      updateUserStatus={props.updateUserStatus} />
      <MyPostsContainer />
      {vid}
    </div>
  );
};

export default Profile;
