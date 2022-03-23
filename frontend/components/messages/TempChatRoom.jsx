import React, { useEffect, useState } from "react";
import { createConsumer } from "@rails/actioncable"
import MessageItemContainer from "./MessageItemContainer";

function TempChatRoom(props) {

  // maybe props.messages should be a selector slice of state?
  const [chatMessages, setChatMessages] = useState(props.messages)
  
  // const Create = ({ match: {params: {id} } }) => {    

  //   useEffect(() => {
  //     setParcelType('paper');
  //   }, [props.match.params.id]);

  useEffect(() => {
    setChatMessages(props.messages);
  }, [props.messages])

  useEffect(() => {
    let isMounted = true;       

    // Fetching users so that we can send them to message index items later
    props.fetchUsers();
    
    // Fetching past messages: 
    // Hard coded for now; need to change later
    const chatInfo = {
      chat_id: 1,
      chat_type: "Conversation"
    }
    
    // Grab prev messages when component mounts
    props.fetchMessagesDB(chatInfo).then((res) => {
      setChatMessages(res.payload)
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