import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ChatRoomInfo from "./ChatRoomInfo";
import { openModal, closeModal } from "../../actions/modal_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    chatRoomMembers: state.entities.conversations,
    users: state.entities.users,
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