import React from "react";
import { Field, reduxForm } from "redux-form";
import { requred } from "../../utils/validators/validators";
import { Input, Textarea } from "../common/FormControls";
import s from "../common/FormControls.module.css";
import style from "./Settings.module.css";
import SettingsContacts from "./SettingsContact";

const SettingsForm = ({ handleSubmit, error, initialValues }) => {
  return (
    <div className={style.form}>
      <form onSubmit={handleSubmit}>
        <div>
          About me:
          <Field name="aboutMe" component={Input} validate={[requred]} />
        </div>
        <div>
          Your contacts:
          <div className={style.contacts}>
            {Object.keys(initialValues.contacts).map((key) => {
              return (
                <SettingsContacts
                  key={key}
                  title={key}
                  initialValues={initialValues.contacts[key]}
                />
              );
            })}
          </div>
        </div>
        <div>
          <Field name="lookingForAJob" component="input" type="checkbox" />
          Looking for a job
        </div>
        <div>
          Looking for a job description:
          <Field
            name="lookingForAJobDescription"
            component={Textarea}
            validate={[requred]}
          />
        </div>
        <div>
          Full Name:
          <Field name="fullName" component={Input} validate={[requred]} />
        </div>
        {error && <div className={s.errorForm}>{error}</div>}
        <div>
          <button className={style.button}>Save change</button>
        </div>
      </form>
    </div>
  );
};

const SettingsReduxForm = reduxForm({ form: "settings" })(SettingsForm);

export default SettingsReduxForm;
