import React from "react";

function MessageItem({message, sender}) {
  console.log(sender)
  console.log(message)
  
  // debugger
  return (
    <div className="MessageItem">
      <img className="MessageItem__sender-profile-img" src={(sender.profilePictureUrl) ? sender.profilePictureUrl: "https://templesinaidc.org/wp-content/uploads/sites/57/2019/12/gray-square.jpg"} />
      <ul>
        <div className="MessageItem__info">
          <li className="MessageItem__sender-name">{(sender.displayName) ? sender.displayName : sender.email }</li>
          <li className="MessageItem__time">{message.createdAt}</li>
        </div>
        <li className="MessageItem__body">{message.body}</li>
      </ul>
    </div>
  )
}

export default MessageItem;