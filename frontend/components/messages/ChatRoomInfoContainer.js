import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ChatRoomInfo from "./ChatRoomInfo";
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchConvos } from "../../actions/conversation_actions";

const mapStateToProps = (state, ownProps) => {
  if (ownProps.match.path === '/app/conversations/:id') {
    return {
      chatType: "Conversation",
      chats: state.entities.conversations,
      currentChat: state.entities.conversations[ownProps.match.params.id],
      users: state.entities.users,
      currentUserId: state.session.id,
      messages: state.entities.messages,
    }
  } else if (ownProps.match.path === '/app/channels/:id') {
    return {
      chatType: "Channel",
      chats: state.entities.channels,
      currentChat: state.entities.channels[ownProps.match.params.id],
      users: state.entities.users,
      currentUserId: state.session.id,
      messages: state.entities.messages,
    }
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchConvos: () => dispatch(fetchConvos()),
    openModal: (modal) => dispatch(openModal(modal)),
    // closeModal: () => dispatch(closeModal()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatRoomInfo));