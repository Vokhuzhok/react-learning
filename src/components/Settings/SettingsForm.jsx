import React from "react";
import { Field, reduxForm } from "redux-form";
import { requred } from "../../utils/validators/validators";
import { Input, Textarea } from "../common/FormControls";
import s from "../common/FormControls.module.css";
import style from "./Settings.module.css";

const SettingsForm = ({ handleSubmit, error }) => {
  return (
    <div className = {style.form}>
      <form onSubmit={handleSubmit}>
        <div>
          About me:
          <Field name="aboutMe" component={Input} validate={[requred]} />
        </div>
        <div>
          Your contacts:
          <div className={style.contacts}>
            <div>
              skype:
              <Field name="contacts.skype" component={Input} />
            </div>
            <div>
              vk:
              <Field name="contacts.vk" component={Input} />
            </div>
            <div>
              facebook:
              <Field name="contacts.facebook" component={Input} />
            </div>
            <div>
              icq:
              <Field name="contacts.icq" component={Input} />
            </div>
            <div>
              googlePlus:
              <Field name="contacts.googlePlus" component={Input} />
            </div>
            <div>
              twitter:
              <Field name="contacts.twitter" component={Input} />
            </div>
            <div>
              instagram:
              <Field name="contacts.instagram" component={Input} />
            </div>
            <div>
              whatsApp:
              <Field name="contacts.whatsApp" component={Input} />
            </div>
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
