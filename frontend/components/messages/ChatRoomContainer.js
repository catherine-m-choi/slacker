import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ChatRoom from "./ChatRoom";
import { 
  fetchMessagesDB, 
  receiveMessage, 
  deleteMessage,
  deleteMessageDB, 
  patchMessage,
  patchMessageDB,
} from "../../actions/message_actions";
import { fetchUsers, fetchUser } from "../../actions/user_actions";
import { fetchConvos } from "../../actions/conversation_actions";
import { selectMessages } from "../../reducers/selectors/selectors";

const mapStateToProps = (state, ownProps) => {
  return {
    messages: selectMessages(state, ownProps.match.params.id, ownProps.match.path),
    conversations: state.entities.conversations,
    channels: state.entities.channels,
    currentUser: state.entities.users[state.session.id],
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessagesDB: (chatInfo) => dispatch(fetchMessagesDB(chatInfo)),
    fetchUsers: () => dispatch(fetchUsers()),
    fetchUser: (userId) => dispatch(fetchUser(userId)),
    receiveMessage: (message) => dispatch(receiveMessage(message)),
    deleteMessage: (message) => dispatch(deleteMessage(message)),
    deleteMessageDB: (message) => dispatch(deleteMessageDB(message)),
    patchMessage: (message) => dispatch(patchMessage(message)),
    patchMessageDB: (message) => dispatch(patchMessageDB(message)),
    fetchConvos: () => dispatch(fetchConvos()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatRoom));