import React from "react";

function MessageItem({message, sender}) {
  console.log(sender)
  console.log(message)
  
  // debugger
  return (
    <ul>
      <li>{message.userId}</li>
      <li>{(sender.profilePictureUrl) ? sender.profilePictureUrl: "<default image>"}</li>
      <li>{(sender.displayName) ? sender.displayName : sender.email }</li>
      <li>{message.body}</li>
      <li>{message.createdAt}</li>
    </ul>
  )
}

export default MessageItem;