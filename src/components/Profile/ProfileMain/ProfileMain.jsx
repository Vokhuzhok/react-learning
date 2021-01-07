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
    <div className={s.profileWrapper}>
      <div className={s.leftBox}>
        <div>
          <div className={s.status}>
            <b>My status:</b>{" "}
            <ProfileStatus 
              userId={props.profile.userId}
              authId={props.authId}
              status={props.status}
              updateUserStatus={props.updateUserStatus}
            />
          </div>
          <img className={s.photo}
            src={
              props.profile.photos.large != null
                ? props.profile.photos.large
                : noUserPhoto
            }
            alt=""
          />
          <div className={s.fullName}>{props.profile.fullName}</div>
        </div>
      </div>
      <div className={s.rightBox}>
        <div className={s.aboutMe}>
          <div>
            <b>About me:</b> {props.profile.aboutMe}
          </div>
        </div>
        <div className={s.bottomBox}>
          <div className={s.contacts}>
            <b>Contacts:</b>
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
          <div className={s.jobBox}>
            <b>About job:</b>
            <div className={s.image}>
              Looking for a job:{" "}
              {props.profile.lookingForAJob === true ? (
                <img src={yes} alt="" />
              ) : (
                <img src={no} alt="" />
              )}
            </div>
            {props.profile.lookingForAJob && (
              <div>
                <b>My skills:</b>
                <div>{props.profile.lookingForAJobDescription}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMain;
