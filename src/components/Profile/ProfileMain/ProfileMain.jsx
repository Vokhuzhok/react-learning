import React from "react";
import Preloader from "../../common/Preloader";
import noUserPhoto from "../../../assest/images/User.png";
import s from "./ProfileMain.module.css";
import yes from "../../../assest/images/galochka.png";
import no from "../../../assest/images/krestik.jpg";
import ProfileStatus from "./ProfileStatus";

const ProfileMain = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div className={s.mainpole}>
      <div className={s.gridPole}>
        <div className={s.leftPole}>
          <div className={s.userPhoto}>
            <div>
              My status: <ProfileStatus
              userId={props.profile.userId}
              authId={props.authId} 
              status={props.status} 
              updateUserStatus={props.updateUserStatus}/>
            </div>
            <img
              src={
                props.profile.photos.large != null
                  ? props.profile.photos.large
                  : noUserPhoto
              }
            alt ="Sorry"
            />
          </div>
          <div className={s.fullName}>{props.profile.fullName}</div>
        </div>
        <div className={s.rightPole}>
          <div className={s.upPole}>
            <div className={s.aboutMe}>About me : {props.profile.aboutMe}</div>
          </div>
          <div className={s.dlPole}>
            <div className={s.contactsHeader}>Contacts:</div>
            <div>
              Facebook:{" "}
              {props.profile.contacts.facebook != null
                ? props.profile.contacts.facebook
                : "No contact"}
            </div>
            <div>
              VK:{" "}
              {props.profile.contacts.vk != null
                ? props.profile.contacts.vk
                : "No contact"}
            </div>
            <div>
              YouTube:{" "}
              {props.profile.contacts.youtube != null
                ? props.profile.contacts.youtube
                : "No contact"}
            </div>
            <div>
              Instagram:{" "}
              {props.profile.contacts.instagram != null
                ? props.profile.contacts.instagram
                : "No contact"}
            </div>
            <div>
              GitHub:{" "}
              {props.profile.contacts.github != null
                ? props.profile.contacts.github
                : "No contact"}
            </div>
          </div>
          <div className={s.drPole}>
            <dir className={s.jobHeader}>About job:</dir>
            <dir className={s.image}>
              Looking for a job:{" "}
              {props.profile.lookingForAJob === true ? (
                <img src={yes} />
              ) : (
                <img src={no} />
              )}
            </dir>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
