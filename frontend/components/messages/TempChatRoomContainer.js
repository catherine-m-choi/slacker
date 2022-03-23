import { connect } from "react-redux";
import TempChatRoom from "./TempChatRoom";
import { 
  fetchMessagesDB, 
  receiveMessage, 
  deleteMessage,
  deleteMessageDB, 
  patchMessage,
  patchMessageDB,
} from "../../actions/message_actions";
import { fetchUsers, fetchUser } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    messages: state.entities.messages,
    currentUser: state.entities.users[state.session.id]
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TempChatRoom)