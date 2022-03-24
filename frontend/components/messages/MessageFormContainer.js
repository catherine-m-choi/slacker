import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MessageForm from "./MessageForm";
import {createMessageDB } from "../../actions/message_actions"

const mapStateToProps = (state, ownProps) => {
  return {
    message: {
      body: ""
    },
    currentUser: state.entities.users[state.session.id]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    messageAction: (message) => dispatch(createMessageDB(message)),
    // patchMessage: (message) => dispatch(patchMessage(message)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageForm));