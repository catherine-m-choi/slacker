import { connect } from "react-redux";
import PinnedMessages from "./PinnedMessageModal";
import { closeModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";
import { getFilteredUsers } from "../../reducers/selectors/selectors";
import { selectPinnedMessages } from "../../reducers/selectors/selectors";

const mapStateToProps = (state, ownProps) => {
  return {
    // conversation: state.entities.conversations[ownProps.match.params.id],
    pinnedMessages: selectPinnedMessages(state, state.entities.conversations[ownProps.match.params.id]),
    filteredUsers: getFilteredUsers(state, state.entities.conversations[ownProps.match.params.id].members ),
  }
}

const mapDispatchToProps = state => {
  return {
    closeModal: () => dispatch(closeModal()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PinnedMessages));