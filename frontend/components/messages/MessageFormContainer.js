import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import MessageForm from "./MessageForm";
import {createMessageDB, incrementReplyCount } from "../../actions/message_actions"
import { addConvo, addMember, updateRecentMessage } from "../../actions/conversation_actions";
import { addChannel, addChannelMember, updateRecentChannelMessage  } from "../../actions/channel_actions";

const mapStateToProps = (state, ownProps) => {
  // debugger
  let currentChat;
  let placeholderMsg = ""
  if (ownProps.match.path === '/app/conversations/:id') {
    if (Object.keys(state.entities.conversations).length !== 0) {
      currentChat = state.entities.conversations[ownProps.match.params.id]
    }
    
    let memberNames = []
    currentChat && currentChat.members.map((userId) => {
      if (state.entities.users) {
        let user = state.entities.users[userId]
        if (user && userId !== state.session.id) {
          memberNames.push((user.displayName))
        } 
      }
      if (memberNames.length === 1) {
        placeholderMsg = memberNames[0];
      } else {
        const slicedNames = memberNames.slice(0, memberNames.length - 1)
        placeholderMsg = slicedNames.join(", ") + ((memberNames.length > 2) ? "," : "") + ` and ${memberNames[memberNames.length - 1]}`
      }
    })
  } else if (ownProps.match.path === '/app/channels/:id') {
    if (Object.keys(state.entities.channels).length !== 0) {
      currentChat = state.entities.channels[ownProps.match.params.id]
    }
    if (currentChat) placeholderMsg = `#${currentChat.name}`
  }
  
  
  return {
    message: {
      body: ""
    },
    currentUser: state.entities.users[state.session.id],
    placeholderMsg: placeholderMsg,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    messageAction: (message) => dispatch(createMessageDB(message)),
    addConvo: (convo) => dispatch(addConvo(convo)),
    addMember: (userId, convoId) => dispatch(addMember(userId, convoId)),
    updateRecentConvoMessage: (convoId, messageId) => dispatch(updateRecentMessage(convoId, messageId)),
    incrementReplyCount: (messageId) => dispatch(incrementReplyCount(messageId)),
    // addChannel: (channel) => dispatch(addChannel(channel)),
    // addChannelMember:  (userId, channelId) => dispatch(addChannelMember(userId, channelId)),
    updateRecentChannelMessage: (channelId, messageId) => dispatch(updateRecentChannelMessage(channelId, messageId)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MessageForm));