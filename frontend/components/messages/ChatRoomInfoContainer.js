import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ChatRoomInfo from "./ChatRoomInfo";
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchConvos } from "../../actions/conversation_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    conversations: state.entities.conversations,
    currentConvo: state.entities.conversations[ownProps.match.params.id],
    users: state.entities.users,
    currentUserId: state.session.id,
    messages: state.entities.messages,
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