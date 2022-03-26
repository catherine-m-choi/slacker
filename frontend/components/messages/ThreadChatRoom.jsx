import React, { useEffect, useState } from "react";
import { createConsumer } from "@rails/actioncable"
import MessageItemContainer from "./MessageItemContainer";
import MessageFormContainer from "./MessageFormContainer";

// if thread
// props.parent = message

// message will have: {
//   body: "Welcome to Slack(er)! Type a message in the chat to begin"
//   createdAt: "2022-03-25T04:33:13.005Z"
//   id: 250
//   messageableId: 69
//   messageableType: "Conversation"
//   parentMessageId: null
//   updatedAt: "2022-03-25T04:33:13.005Z"
//   userId: 44
// }

function ThreadChatRoom(props) {

  // maybe props.messages should be a selector slice of state?
  const [chatMessages, setChatMessages] = useState([props.parentMessage])
  // debugger

  useEffect(() => {
    const chatInfo = {
      // chat_id: props.parentMessage.messageableId,
      parent_message_id: props.parentMessage.id,
      chat_type: props.parentMessage.messageableType,
      // thread: true
    }

    props.fetchMessagesDB().then( (res) => {
      const currentMsgs = Object.values(res.payload).filter((msg) => msg.parentMessageId === props.parentMessage.id )
      setChatMessages([props.parentMessage , ...currentMsgs])
    })
  }, [])
  
  useEffect(() => {
    setChatMessages(props.messages);
  }, [props.messages])

  useEffect(() => {
    let isMounted = true;       
    
    const chatInfo = {
      // chat_id: props.parentMessage.messageableId,
      chat_type: props.parentMessage.messageableType,
      parent_message_id: props.parentMessage.id,
      thread: true
    }
    
    // Grab prev messages when component mounts
    props.fetchMessagesDB(chatInfo).then((res) => {
      const currentMsgs = Object.values(res.payload).filter((msg) => msg.parentMessageId === props.parentMessage.id )
      if (isMounted) setChatMessages([props.parentMessage , ...currentMsgs])
    })
    
    // setting up websocket:
    // switch later for production!!!
    // const cable = createConsumer("wss://cat-slacker.herokuapp.com/cable")
    const cable = createConsumer("ws://localhost:3000/cable")

    // channel is necessary for connection to be established. category and id are params 
    // passed to ChatChannel
    const chatParams = {
      channel: "ChatsChannel", 
      chat_id: props.parentMessage.messageableId,
      chat_type: props.parentMessage.messageableType
    }

    // creating actual subscription
    const chat = cable.subscriptions.create(chatParams, {
      connected: () => {
        console.log("connected to websocket");
        // Broadcast that I joined
      },
      disconnected: () => {
        // Called when the subscription has been terminated by the server
      },
      received: (data) => {
        // Called when there's incoming data on the websocket for this channel
        console.log("websocket received data!")
        console.log(data)

        // Preventing repeated action for user who broadcasts, since they will
        // also receive the data they themselves broadcast out.
        
        switch (data.action) {
          case "subscribed":
            // When new used has joined chat, fetch user
            // props.fetchUsers()
            break;
          case "create":
            if (data.message.user_id === props.currentUser.id) return;
            if (data.message.parent_message_id === props.parentMessage.id) {
              console.log("yesssssss")
              // debugger
              props.receiveMessage(camelizeMessage(data.message))
            }
            break;
          case "delete":
            props.deleteMessage(data.message.id)
            break;
          case "update":
            props.patchMessage(camelizeMessage(data.message))
            break;
        }
      }
    })

    const camelizeMessage = (message) => {
      return {
        body: message.body,
        id: message.id,
        userId: message.user_id,
        parentMessageId: message.parent_message_id,
        messageableId: message.messageable_id,
        messageableType: message.messageable_type,
        createdAt: message.created_at,
        updatedAt: message.updated_at,
      }
    }

    // cleaning up when component is unmounted
    return () => {
      chat.unsubscribe();
      isMounted = false; 
    };
  }, [])
  
  // Showing date above message only when it's a different date than previous msg
  let prevDate = 0;
  const displayMessages = Object.values(chatMessages).map((msg) => {
    let date = new Date(msg.createdAt)
    let dateNoHours = date.setHours(0,0,0,0)
    let displayDate = false;

    if (prevDate.valueOf() !== dateNoHours.valueOf()) {
      prevDate = dateNoHours;
      displayDate = true;
    }
    return (
      <MessageItemContainer 
        key={msg.id} 
        message={msg} 
        displayDate={displayDate} 
        deleteMessageDB={props.deleteMessageDB}
        patchMessageDB={props.patchMessageDB}
      />
    )
  })

  return (
    <div>
      <div className="ChatRoom__container">
        <div className="ChatRoom">
          <ul>
            {displayMessages}
            {props.parentMessage && <MessageFormContainer  parentMessage={props.parentMessage} />}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ThreadChatRoom;