import { connect } from "react-redux";
import MessageItem from "./MessageItem";
import { openRightSidebar } from "../../actions/right_sidebar_actions";
import { saveMessage } from "../../actions/message_actions";
import { openModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    sender: state.entities.users[ownProps.message.userId],
    users: state.entities.users,
    currentUserId: state.session.id,
    savedMessages: state.session.savedMessages,
    replyCount: ownProps.message.replyCount,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openRightSidebar: (sidebarInfo) => dispatch(openRightSidebar(sidebarInfo)),
    saveMessage: (saveData) => dispatch(saveMessage(saveData)),
    unsaveMessage: (savedId) => dispatch(unsaveMessage(savedId)),
    openModal: (modal) => dispatch(openModal(modal)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageItem);