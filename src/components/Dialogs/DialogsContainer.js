import React from "react";
import Dialogs from "./Dialogs";
import {
  addMessageActionCreator,
  updateNewMessageActionCreator,
} from "../../redux/dialogs-reduser";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage };
};

let mapDispathToProps = (dispatch) => {
  return {
    addNewMessage: () => {
      dispatch(addMessageActionCreator());
    },
    updateNewMessage: (Mtext) => {
      dispatch(updateNewMessageActionCreator(Mtext));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispathToProps)(Dialogs);

export default DialogsContainer;
