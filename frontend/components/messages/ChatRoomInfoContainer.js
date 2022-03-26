import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ChatRoomInfo from "./ChatRoomInfo";
import { openModal, closeModal } from "../../actions/modal_actions";
import { fetchConvos } from "../../actions/conversation_actions";

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    conversations: state.entities.conversations,
    users: state.entities.users,
    currentUserId: state.session.id,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    fetchConvos: () => dispatch(fetchConvos()),
    openModal: (modal) => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChatRoomInfo));