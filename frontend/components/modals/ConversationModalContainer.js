import { connect } from "react-redux";
import ConversationModal from "./ConversationModal";
import { closeModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";
import { getFilteredUsers } from "../../reducers/selectors/selectors";
import { addMember, removeMember } from "../../actions/conversation_actions";
import { openRightSidebar } from "../../actions/right_sidebar_actions";

const mapStateToProps = (state, ownProps) => {
  // debugger
  if (ownProps.match.path === '/app/conversations/:id') {
    return {
      chat: state.entities.conversations[ownProps.match.params.id],
      users: state.entities.users,
      filteredUsers: getFilteredUsers(state, state.entities.conversations[ownProps.match.params.id].members ),
      currentUserId: state.session.id,
    }
  } else if (ownProps.match.path === '/app/channels/:id') {
    return {
      chat: state.entities.channels[ownProps.match.params.id],
      users: state.entities.users,
      filteredUsers: getFilteredUsers(state, state.entities.channels[ownProps.match.params.id].members ),
      currentUserId: state.session.id,
    }
  }
}

const mapDispatchToProps = state => {
  return {
    fetchConvos: () => dispatch(fetchConvos()),
    closeModal: () => dispatch(closeModal()),
    addMember: (userId, convoId) => dispatch(addMember(userId, convoId)),
    removeMember: (userId, convoId) => dispatch(removeMember(userId, convoId)),
    openRightSidebar: (sidebarInfo) => dispatch(openRightSidebar(sidebarInfo)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConversationModal));