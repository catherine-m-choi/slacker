import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MessageForm from "./MessageForm";
import {createMessageDB } from "../../actions/message_actions"
import { addConvo, addMember } from "../../actions/conversation_actions";

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
    addConvo: (convo) => dispatch(addConvo(convo)),
    addMember: (userId, convoId) => dispatch(addMember(userId, convoId)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageForm));