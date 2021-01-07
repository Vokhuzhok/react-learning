import React, { useEffect, useState } from "react";
import s from "./ProfileMain.module.css"

// class ProfileStatus extends React.Component {
//   state = {
//     editMode: false,
//     status: this.props.status
//   };

//   activateEditMode = () => {
//     this.setState({
//       editMode: true,
//     });
//   };

//   disactivateEditMode = () => {
//     this.setState({
//       editMode: false,
//     });
//     this.props.updateUserStatus(this.state.status)
//   };

//   onStatusChange = (e) => {
//     this.setState({
//       status: e.currentTarget.value
//     });
//   };

//   componentDidUpdate(prevProps) {
//     if (prevProps.status !== this.props.status){
//       this.setState ({
//         status: this.props.status
//       });
//     };
//   };

//   render() {
//     return (
//       <span className={s.status}>
//         {!this.state.editMode && (
//           <span onDoubleClick={this.activateEditMode}>
//             {!this.props.status ? "No status" : this.props.status}
//           </span>
//         )}
//         {this.state.editMode && (
//           <input
//             onChange={this.onStatusChange}
//             autoFocus={true}
//             onBlur={this.disactivateEditMode}
//             value={this.state.status}
//           />
//         )}
//       </span>
//     );
//   }
// }

const ProfileStatus = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  }
  const disactivateEditMode = () => {
    setEditMode(false);
    props.updateUserStatus(status)
  }
  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value)
  }

  useEffect (() => {
    setStatus(props.status)
  }, [props.status])

  return <span>
           {!editMode && (
            <span className={s.statusText} onDoubleClick={props.userId === props.authId ? activateEditMode : null}>
              {!props.status ? "No status" : props.status}
            </span>
          )}
          {editMode && (
            <input
              onChange={onStatusChange}
              autoFocus={true}
              onBlur={disactivateEditMode}
              value={status}
            />
          )}
        </span>
}

export default ProfileStatus;
