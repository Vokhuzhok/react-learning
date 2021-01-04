import React from "react";
import { Field, reduxForm } from "redux-form";
import { setLookingForAJob } from "../../redux/reducers/setting-reducer";
import { Input, Textarea } from "../common/FormControls";

// const SettingsForm = ({ handleSubmit, error, profileAuth }) => {
//   // const check = profileAuth.lookingForAJob;
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         About me:{" "}
//         <Field
//           name="aboutMe"
//           placeholder={profileAuth.aboutMe}
//           component={Input}
//         />
//       </div>
//       <div>
//         Your contacts:
//         <div>
//           skype:
//           <Field
//             name="contacts.skype"
//             placeholder={profileAuth.contacts.skype}
//             component={Input}
//           />
//         </div>
//         <div>
//           vk:
//           <Field
//             name="contacts.vk"
//             placeholder={profileAuth.contacts.vk}
//             component={Input}
//           />
//         </div>
//         <div>
//           facebook:
//           <Field
//             name="contacts.facebook"
//             placeholder={profileAuth.contacts.facebook}
//             component={Input}
//           />
//         </div>
//         <div>
//           icq:
//           <Field
//             name="contacts.icq"
//             placeholder={profileAuth.contacts.icq}
//             component={Input}
//           />
//         </div>
//         {/* <div>
//           email:
//           <Field
//             name="email"
//             placeholder={profileAuth.contacts.email}
//             component={Input}
//           />
//         </div> */}
//         <div>
//           googlePlus:
//           <Field
//             name="contacts.googlePlus"
//             placeholder={profileAuth.contacts.googlePlus}
//             component={Input}
//           />
//         </div>
//         <div>
//           twitter:
//           <Field
//             name="contacts.twitter"
//             placeholder={profileAuth.contacts.twitter}
//             component={Input}
//           />
//         </div>
//         <div>
//           instagram:
//           <Field
//             name="contacts.instagram"
//             placeholder={profileAuth.contacts.instagram}
//             component={Input}
//           />
//         </div>
//         <div>
//           whatsApp:
//           <Field
//             name="contacts.whatsApp"
//             placeholder={profileAuth.contacts.whatsApp}
//             component={Input}
//           />
//         </div>
//       </div>
//       <div>
//         <Field name="lookingForAJob" component="input" type="checkbox" />{" "}
//         Looking for a job
//       </div>
//       <div>
//         Looking for a job description:{" "}
//         <Field name="lookingForAJobDescription" component={Textarea} />
//       </div>
//       <div>
//         <button>Save change</button>
//       </div>
//     </form>
//   );
// };

// const SettingsReduxForm = reduxForm({ form: "settings" })(SettingsForm);

const Settings = ({ profileAuth, putAuthUserProfile }) => {
  // const onSubmit = (formData) => {
  //   let LFAJ = formData.map
  //   debugger
  //   setLookingForAJob(LFAJ);
  //   putAuthUserProfile();
  // };
  return (
    <div>
      <h1>SETTINGS</h1>
      {/* <SettingsReduxForm onSubmit={onSubmit} profileAuth={profileAuth} /> */}
    </div>
  );
};

export default Settings;
