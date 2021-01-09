import React from "react";

const ProfileContacts = (props) => {
return <div><b>{props.title}</b>:{props.value ? props.value : "No contact" }</div>
}

export default ProfileContacts;