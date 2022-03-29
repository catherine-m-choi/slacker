import { connect } from "react-redux";
import PinnedMessages from "./PinnedMessageModal";
import { closeModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";
import { getFilteredUsers } from "../../reducers/selectors/selectors";
import { selectPinnedMessages } from "../../reducers/selectors/selectors";
import { patchMessageDB } from "../../actions/message_actions";
import { updatePinnedConvoMessages } from "../../actions/conversation_actions";
import { updatePinnedChannelMessages } from "../../actions/channel_actions";

const mapStateToProps = (state, ownProps) => {
  let chat;
  if (ownProps.match.path === '/app/conversations/:id') {
    chat = state.entities.conversations[ownProps.match.params.id]
  }
  else if (ownProps.match.path === '/app/channels/:id') {
    chat = state.entities.channels[ownProps.match.params.id]
  }
  return {
    pinnedMessagesId: chat.pinnedMessages,
    // messages: state.entities.messages,
    pinnedMessages: selectPinnedMessages(state, chat),
    filteredUsers: getFilteredUsers(state, chat.members ),
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  let updatePinnedMessages;
  if (ownProps.match.path === '/app/conversations/:id') {
    updatePinnedMessages = updatePinnedConvoMessages
  }
  else if (ownProps.match.path === '/app/channels/:id') {
    updatePinnedMessages = updatePinnedChannelMessages
  }
  return {
    closeModal: () => dispatch(closeModal()),
    patchMessageDB: (message) => dispatch(patchMessageDB(message)),
    updatePinnedMessages: (convoId, pinnedMessages) => dispatch(updatePinnedMessages(convoId, pinnedMessages)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinnedMessages));