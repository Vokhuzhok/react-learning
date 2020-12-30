import Dialogs from "./Dialogs";
import { addMessage} from "../../redux/reducers/dialogs-reduser";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { getDialogsPage } from "../../redux/selectors/dialogsSelectors";

let mapStateToProps = (state) => {
  return {
    dialogsPage: getDialogsPage(state),
  };
};

export default compose(
  connect(mapStateToProps, { addMessage }),
  withAuthRedirect
)(Dialogs);
