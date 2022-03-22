import { connect } from "react-redux";
import TempChatRoom from "./TempChatRoom";
import { fetchMessages} from "../../actions/message_actions";
import { fetchUsers } from "../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    messages: Object.values(state.entities.messages),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMessages: (chatInfo) => dispatch(fetchMessages(chatInfo)),
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TempChatRoom)