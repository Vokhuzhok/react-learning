import React from "react";
import noUserPhoto from "../../assest/images/User.png";
import s from "./Settings.module.css";
import SettingsReduxForm from "./SettingsForm";

const Settings = ({ profileAuth, putAuthUserProfile, savePhoto }) => {
  const onSubmit = (formData) => {
    putAuthUserProfile({ ...formData });
  };
  const onFileSelected = (e) => {
    if (e.target.files.length) {savePhoto(e.target.files[0])}
  }
  return (
    <div>
      <div className={s.header}>
      <h1>SETTINGS</h1>
      <h2>Your profile:</h2>
      </div>
      <div className={s.profileBlock}>
        <SettingsReduxForm onSubmit={onSubmit} initialValues={profileAuth} />
        <div className={s.photo}>
          <img src={profileAuth.photos.large || noUserPhoto} alt="" />
          <div>
            <b>Change your photo:</b>
            <input type={"file"} onChange={onFileSelected} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
