import Dialogs from "./Dialogs";
import {
  addMessage,
  updateNewMessage,
} from "../../redux/dialogs-reduser";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return { dialogsPage: state.dialogsPage };
};

const DialogsContainer = connect(mapStateToProps, { addMessage, updateNewMessage })(Dialogs);

export default DialogsContainer;
