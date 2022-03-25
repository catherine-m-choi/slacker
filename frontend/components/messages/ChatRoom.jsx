import React, { useEffect, useState } from "react";
import { createConsumer } from "@rails/actioncable"
import MessageItemContainer from "./MessageItemContainer";

function ChatRoom(props) {

  // maybe props.messages should be a selector slice of state?
  const [chatMessages, setChatMessages] = useState(props.messages)
  
  useEffect(() => {
    const chatInfo = {
      chat_id: props.match.params.id,
      chat_type: "Conversation"
    }

    props.fetchMessagesDB(chatInfo).then( (res) => {
      const currentMsgs = Object.values(res).filter((msg) => msg.messageableId === props.match.params.id )
      setChatMessages(currentMsgs);
    })

  }, [props.match.params.id])
  
  useEffect(() => {
    setChatMessages(props.messages);
  }, [props.messages])

  useEffect(() => {
    let isMounted = true;       

    // Fetching users so that we can send them to message index items later
    // Later change this to only fetch users in the chat
    // props.fetchUsers();

    const chatInfo = {
      chat_id: props.match.params.id,
      chat_type: "Conversation"
    }
    
    // Grab prev messages when component mounts
    props.fetchMessagesDB(chatInfo).then((res) => {
      setChatMessages(res.payload)
    })
    
    // setting up websocket:
    // switch later for production!!!
    // const cable = createConsumer("wss://cat-slacker.herokuapp.com/cable")
    const cable = createConsumer("ws://localhost:3000/cable")

    // channel is necessary for connection to be established. category and id are params 
    // passed to ChatChannel
    const chatParams = {
      channel: "ChatsChannel", 
      chat_type: "Conversation",
      chat_id: props.match.params.id
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
            props.receiveMessage(camelizeMessage(data.message))
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
    // debugger
    if (prevDate.valueOf() !== dateNoHours.valueOf()) {
      prevDate = dateNoHours;
      displayDate = true;
    }
    // debugger
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
          [Chat Room]
          <ul>
            {displayMessages}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ChatRoom;