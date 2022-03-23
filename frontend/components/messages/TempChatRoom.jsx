import React, { useEffect, useState } from "react";
import { createConsumer } from "@rails/actioncable"
import MessageItemContainer from "./MessageItemContainer";

function TempChatRoom(props) {

  // maybe props.messages should be a selector slice of state?
  const [chatMessages, setChatMessages] = useState([])
  
  useEffect(() => {
    // Fetching users so that we can send them to message index items later
    props.fetchUsers();
    
    // Fetching past messages: 
    // Hard coded for now; need to change later
    const chatInfo = {
      chat_id: 1,
      chat_type: "Conversation"
    }
    
    // Grab prev messages when component mounts
    props.fetchMessages(chatInfo).then((res) => {
      setChatMessages(Object.values(res.payload))
    })
    
    // setting up websocket:
    // update later
    const cable = createConsumer("ws://localhost:3000/cable")

    // hard coding to test for now
    // channel is necessary for connection to be established. category and id are params 
    // passed to ChatChannel
    const chatParams = {
      channel: "ChatsChannel", 
      chat_type: "Conversation",
      chat_id: 1
    }

    // creating actual subscription
    const chat = cable.subscriptions.create(chatParams, {
      connected: () => {
        console.log("connected to websocket");
        // Need to broadcast that I joined, so that 
      },
      disconnected() {
        // Called when the subscription has been terminated by the server
      },
      received(data) {
        // Called when there's incoming data on the websocket for this channel
        switch (data.action) {
          case 'subscribed':
            // When new used has joined chat, fetch user
            props.fetchUsers()
            break;
          case 'typing':
            console.log("someone is typing...")
          default:
            break;
        }
        console.log(data)
        console.log("websocket received data!")
        // debugger
        if (chatMessages.length !== 0) {
          setChatMessages(chatMessages.concat(data))
        } else {
          props.fetchMessages(chatInfo).then((res) => {
            setChatMessages(Object.values(res.payload))
          })
        }
      }
    })

    // cleaning up when component is unmounted
    return () => chat.unsubscribe();
  }, [])
  
  // Showing date above message only when it's a different date than previous msg
  let prevDate = 0;
  const displayMessages = chatMessages.map((msg) => {
    let date = new Date(msg.createdAt)
    let dateNoHours = date.setHours(0,0,0,0)
    let displayDate = false;
    // debugger
    if (prevDate.valueOf() !== date.valueOf()) {
      prevDate = date
      displayDate = true;
    }
    return (
      <MessageItemContainer key={msg.id} message={msg} displayDate={displayDate}/>
    )
  })

  return (
    <div className="ChatRoom__container">
      <div className="ChatRoom">
        [Chat Room]
        <ul>
          {displayMessages}
        </ul>
      </div>
    </div>
  )
}

export default TempChatRoom