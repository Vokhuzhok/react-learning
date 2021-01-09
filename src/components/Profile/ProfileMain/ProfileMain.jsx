import React from "react";
import Preloader from "../../common/Preloader";
import noUserPhoto from "../../../assest/images/User.png";
import s from "./ProfileMain.module.css";
import yes from "../../../assest/images/galochka.png";
import no from "../../../assest/images/krestik.jpg";
import ProfileStatus from "./ProfileStatus";
import ProfileContacts from "./ProfileContacts";

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
          <img
            className={s.photo}
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
            {Object.keys(props.profile.contacts).map((key) => {
              return (
                <ProfileContacts
                  key={key}
                  title={key}
                  value={props.profile.contacts[key]}
                />
              );
            })}
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
