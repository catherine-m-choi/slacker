import React from "react";
// import ChatRoomContainer from "../messages/ChatRoomContainer";
import ThreadChatRoomContainer from "../messages/ThreadChatRoomContainer";

function Thread(props) {
  return (
    <div className="Thread" >
      Thread~~~ # {props.threadId}
      <button onClick={props.closeRightSidebar} >Close me!</button>

      <ThreadChatRoomContainer parentMessage={props.message} />
    </div>
  )
}

export default Thread;