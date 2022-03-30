import { connect } from "react-redux";
import ConversationIndex from "./ConversationIndex";
import { fetchConvos } from "../../../actions/conversation_actions";

const mapStateToProps = (state) => {
  return {
    conversations: state.entities.conversations,
    users: state.entities.users,
    currentUserId: state.session.id,
  }
}

const mapDispatchToProps = (state) => {
  return {
    fetchConvos: () => dispatch(fetchConvos()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationIndex);