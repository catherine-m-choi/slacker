import { connect } from "react-redux";
import ConversationModal from "./ConversationModal";
import { closeModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";
import { getFilteredUsers } from "../../reducers/selectors/selectors";
import { addMember } from "../../actions/conversation_actions";

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    conversation: state.entities.conversations[ownProps.match.params.id],
    users: state.entities.users,
    filteredUsers: getFilteredUsers(state, state.entities.conversations[ownProps.match.params.id].members )
  }
}

const mapDispatchToProps = state => {
  return {
    fetchConvos: () => dispatch(fetchConvos()),
    closeModal: () => dispatch(closeModal()),
    addMember: (userId, convoId) => dispatch(addMember(userId, convoId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConversationModal));