import Dialogs from "./Dialogs";
import { addMessage, updateNewMessage } from "../../redux/dialogs-reduser";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
};

export default compose(
  connect(mapStateToProps, { addMessage, updateNewMessage }),
  withAuthRedirect
)(Dialogs);
