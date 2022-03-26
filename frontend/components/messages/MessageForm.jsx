import React, { useState } from "react";

function MessageForm(props) {

  const [body, setBody] = useState(props.message.body)

  const chatInfo = {
    chat_id: props.match.params.id,
    chat_type: "Conversation"
  }

  let newMessage;
  const handleSubmit = () => {
    let messageType;

    if (props.parentMessage) {
      console.log("thread reply")
      console.log("not a new convo")
      messageType = "Conversation";

      newMessage = {
        body: body,
        user_id: props.currentUser.id,
        parent_message_id: props.parentMessage.id,
        messageable_type: props.parentMessage.messageableType,
        messageable_id: props.parentMessage.messageableId,
      }

      props.messageAction(newMessage);
    } else {

      switch (props.match.path) {
        case '/app/conversations/:id':
          console.log("not a new convo")
          messageType = "Conversation";

          newMessage = {
            body: body,
            user_id: props.currentUser.id,
            parent_message_id: null,
            messageable_type: messageType,
            messageable_id: props.match.params.id,
          }
    
          props.messageAction(newMessage);
          break;
        case '/app/drafts':
          console.log("new convo!!!")
          messageType = "Conversation"
          let convoId;

          props.addConvo()
            .then((res) => {
              // debugger
              props.recipients.forEach((userId) => {
                // debugger
                props.addMember(userId, res.payload.id)
              })

              newMessage = {
                body: body,
                user_id: props.currentUser.id,
                parent_message_id: null,
                messageable_type: messageType,
                messageable_id: res.payload.id,
              }

              props.messageAction(newMessage)
              convoId = res.payload.id
            }, console.log)
            .then( () => props.history.push(`/app/conversations/${convoId}`))
          break;
        case '/app/channels/:id':
          messageType = "Channel"
          break;
        default:
          break;
      }
  }

    setBody("");
  }
  
  return (
    <div className={`MessageForm__container ${(props.parentMessage) ? "thread" : ""}`}>
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