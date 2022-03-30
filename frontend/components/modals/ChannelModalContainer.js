import { connect } from "react-redux";
import ChannelModal from "./ChannelModal";
import { closeModal } from "../../actions/modal_actions";
import { withRouter } from "react-router-dom";
import { getFilteredUsers } from "../../reducers/selectors/selectors";
// import { addMember } from "../../actions/conversation_actions";
import { addChannelMember, removeChannelMember } from "../../actions/channel_actions";

const mapStateToProps = (state, ownProps) => {
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

const mapDispatchToProps = dispatch => {
  return {
    fetchConvos: () => dispatch(fetchConvos()),
    closeModal: () => dispatch(closeModal()),
    addMember: (userId, channelId) => dispatch(addChannelMember(userId, channelId)),
    removeMember: (userId, channelId) => dispatch(removeChannelMember(userId, channelId)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelModal));