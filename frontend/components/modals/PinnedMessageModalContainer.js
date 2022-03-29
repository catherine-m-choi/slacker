import { connect } from "react-redux";
import PinnedMessages from "./PinnedMessageModal";
import { closeModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";
import { getFilteredUsers } from "../../reducers/selectors/selectors";
import { selectPinnedMessages } from "../../reducers/selectors/selectors";
import { patchMessageDB } from "../../actions/message_actions";

const mapStateToProps = (state, ownProps) => {
  let chat;
  if (ownProps.match.path === '/app/conversations/:id') {
    chat = state.entities.conversations[ownProps.match.params.id]
  }
  else if (ownProps.match.path === '/app/channels/:id') {
    chat = state.entities.channels[ownProps.match.params.id]
  }

  return {
    // pinnedMessages: chat.pinnedMessages,
    // messages: state.entities.messages,
    pinnedMessages: selectPinnedMessages(state, chat),
    filteredUsers: getFilteredUsers(state, chat.members ),
  }
}

const mapDispatchToProps = state => {
  return {
    closeModal: () => dispatch(closeModal()),
    patchMessageDB: (message) => dispatch(patchMessageDB(message)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinnedMessages));