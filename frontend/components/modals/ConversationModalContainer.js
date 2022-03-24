import { connect } from "react-redux";
import ConversationModal from "./ConversationModal";
import { closeModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";
import { getFilteredUsers } from "../../reducers/selectors/selectors";

const mapStateToProps = (state, ownProps) => {
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
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConversationModal));