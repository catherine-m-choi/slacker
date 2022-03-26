import React from "react";
// import ChatRoomContainer from "../messages/ChatRoomContainer";
import ThreadChatRoomContainer from "../messages/ThreadChatRoomContainer";
import MessageFormContainer from "../messages/MessageFormContainer";

function Thread(props) {
  return (
    <div className="Thread" >
      Thread~~~ # {props.threadId}
      <button onClick={props.closeRightSidebar} >Close me!</button>

      <ThreadChatRoomContainer parentMessage={props.message} />
      {/* <MessageFormContainer /> */}
    </div>
  )
}

export default Thread;