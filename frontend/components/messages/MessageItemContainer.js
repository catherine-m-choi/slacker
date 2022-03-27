import { connect } from "react-redux";
import MessageItem from "./MessageItem";
import { openRightSidebar } from "../../actions/right_sidebar_actions";
import { saveMessage } from "../../actions/message_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    sender: state.entities.users[ownProps.message.userId],
    users: state.entities.users,
    currentUserId: state.session.id,
    savedMessages: state.session.savedMessages,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openRightSidebar: (sidebarInfo) => dispatch(openRightSidebar(sidebarInfo)),
    saveMessage: (saveData) => dispatch(saveMessage(saveData)),
    unsaveMessage: (savedId) => dispatch(unsaveMessage(savedId)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageItem);