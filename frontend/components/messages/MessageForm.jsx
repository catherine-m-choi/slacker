import React, { useState } from "react";

function MessageForm({message, currentUser, messageAction}) {

  const [body, setBody] = useState(message.body)

  // id: 1
  // body: "my first message"
  // userId: 3
  // parentMessageId: null
  // messageableId: 1
  // messageableType: "Conversation"

  // updatedAt: "2022-03-21T23:49:32.883Z"
  // createdAt: "2022-03-21T23:49:32.883Z"
  
  const handleSubmit = () => {
    const newMessage = {
      body: body,
      user_id: currentUser.id,
      // parent_message_id could come from a button. 
      parent_message_id: null,
      // These next two should come from ownProps url. Hard coding for now.
      messageable_type: "Conversation",
      messageable_id: 4,
    }
    
    messageAction(newMessage);
    setBody("");
  }
  
  return (
    <div className="MessageForm__container">
      <form className="MessageForm">
        [This is the textbox area]
        <br />
        <input type="text" value={body} onChange={(e) => setBody(e.target.value) }/>
        <button onClick={handleSubmit}>Send</button>
      </form>
    </div>
  )
}

export default MessageForm;