import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MessageForm from "./MessageForm";
import {createMessageDB, incrementReplyCount } from "../../actions/message_actions"
import { addConvo, addMember, updateRecentMessage } from "../../actions/conversation_actions";

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
    updateRecentMessage: (convoId, messageId) => dispatch(updateRecentMessage(convoId, messageId)),
    incrementReplyCount: (messageId) => dispatch(incrementReplyCount(messageId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageForm));