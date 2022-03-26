import React from "react";
// import ChatRoomContainer from "../messages/ChatRoomContainer";
import ThreadChatRoomContainer from "../messages/ThreadChatRoomContainer";

function Thread(props) {
  let header;
  if (props.message.messageableType === "Conversation") {

    // Different thread header based on number of different user replies.
    if (props.message.userRepliesIds.length === 0) {
      header = ""
    } else if (props.message.userRepliesIds.length === 1) {
      header = <span>{props.users[props.message.userRepliesIds[0]].displayName}</span>
    } else {
      header = <span>{`Direct message with ${props.message.userRepliesIds.length} others`}</span>
    }
  } else if  (props.message.messageableType === "Channel") {
    header = <span>This is a reply to a channel</span>
  }
  
  return (
    <div className="Thread" >
      <h3>Thread</h3> {header}
      <button onClick={props.closeRightSidebar} >Close me!</button>

      <ThreadChatRoomContainer parentMessage={props.message} />
    </div>
  )
}

import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    users: state.entities.users
  }
}

export default connect(mapStateToProps, null)(Thread);