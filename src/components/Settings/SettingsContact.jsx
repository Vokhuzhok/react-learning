import React from "react";
import { Field } from "redux-form";
import { Input } from "../common/FormControls";

const SettingsContacts = ({title}) => {
    return (
        <div>
        {title}:
        <Field name={`contacts.${title}`} component={Input} />
        </div>
    )
}

export default SettingsContacts;