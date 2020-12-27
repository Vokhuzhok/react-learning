import React from "react";
import s from "./ProfileMain.module.css"

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode = () => {
    this.setState({
      editMode: true,
    });
  };

  disactivateEditMode = () => {
    this.setState({
      editMode: false,
    });
    this.props.updateStatus(this.state.status)
  };

  onStatusChange = (e) => {
    this.setState({
      status: e.currentTarget.value
    });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status){
      this.setState ({
        status: this.props.status
      });
    };
  };

  render() {
    return (
      <span className={s.status}>
        {!this.state.editMode && (
          <span onDoubleClick={this.activateEditMode}>
            {!this.props.status ? "No status" : this.props.status}
          </span>
        )}
        {this.state.editMode && (
          <input
            onChange={this.onStatusChange}
            autoFocus={true}
            onBlur={this.disactivateEditMode}
            value={this.state.status}
          />
        )}
      </span>
    );
  }
}

export default ProfileStatus;
