import React, { useState } from "react";

function MessageForm(props) {

  const [body, setBody] = useState(props.message.body)

  const chatInfo = {
    chat_id: props.match.params.id,
    chat_type: "Conversation"
  }

  const handleSubmit = () => {
    const newMessage = {
      body: body,
      user_id: props.currentUser.id,
      // parent_message_id could come from a button. 
      parent_message_id: null,
      // These next two should come from ownProps url. Hard coding for now.
      messageable_type: "Conversation",
      messageable_id: props.match.params.id,
    }
    
    props.messageAction(newMessage);
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