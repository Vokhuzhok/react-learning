import React from "react";

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
    })
  }

  render() {
    return (
      <span>
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
