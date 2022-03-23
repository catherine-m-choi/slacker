import { connect } from "react-redux";
import MessageForm from "./MessageForm";
import {createMessageDB } from "../../actions/message_actions"

const mapStateToProps = (state) => {
  return {
    message: {
      body: ""
    },
    currentUser: state.entities.users[state.session.id]
  }
}

// id: 1
// body: "my first message"
// userId: 3
// parentMessageId: null
// messageableId: 1
// messageableType: "Conversation"

// updatedAt: "2022-03-21T23:49:32.883Z"
// createdAt: "2022-03-21T23:49:32.883Z"

const mapDispatchToProps = (dispatch) => {
  return {
    messageAction: (message) => dispatch(createMessageDB(message)),
    // patchMessage: (message) => dispatch(patchMessage(message)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageForm);