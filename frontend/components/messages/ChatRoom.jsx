import React, { useEffect, useState } from "react";
import { createConsumer } from "@rails/actioncable"
import MessageItemContainer from "./MessageItemContainer";
import MessageFormContainer from "./MessageFormContainer";
import NoMatch from "./NoMatch";

function ChatRoom(props) {

  const [chatMessages, setChatMessages] = useState(props.messages)
    
  useEffect(() => {
    let isMounted = true; 
    if (isMounted) setChatMessages(props.messages);
    return () => {
      isMounted = false; 
    }
  }, [props.messages])


  useEffect(() => {
    let isMounted = true;      
    let chatInfo = {}
    chatInfo = {chat_id: props.match.params.id}

    if (props.match.path === '/app/conversations/:id') {
      chatInfo['chat_type'] =  "Conversation"
    } else if (props.match.path === '/app/channels/:id') {
      chatInfo['chat_type'] =  "Channel"
    }

    props.fetchMessagesDB().then( (res) => {
      const currentMsgs = Object.values(res.payload).filter((msg) => String(msg.messageableId) === String(props.match.params.id) )
      if (isMounted) setChatMessages(currentMsgs);
    })

    return () => {isMounted = false}
  }, [props.match.params.id])


  useEffect(() => {
    // console.log("mounting websocket")
    let isMounted = true;       
    
    props.fetchMessagesDB().then( (res) => {
      const currentMsgs = Object.values(res.payload).filter((msg) => String(msg.messageableId) === String(props.match.params.id) )
      if (isMounted) setChatMessages(currentMsgs);
    })
    
    // setting up websocket:
    // switch later for production!!!
    // const cable = createConsumer("wss://cat-slacker.herokuapp.com/cable")
    const cable = createConsumer("ws://localhost:3000/cable")

    // channel is necessary for connection to be established. chat_type and id are params 
    // passed to ChatChannel
    const chatParams = {
      channel: "ChatsChannel", 
      chat_id: props.match.params.id
    }

    if (props.match.path === '/app/conversations/:id') {
      chatParams.chat_type =  "Conversation";
    } else if (props.match.path === '/app/channels/:id') {
      chatParams.chat_type =  "Channel";
    }

    // creating actual subscription
    const chat = cable.subscriptions.create(chatParams, {
      connected: () => {
        // console.log("connected to websocket");
        // Broadcast that I joined
      },
      disconnected: () => {
        // Called when the subscription has been terminated by the server
      },
      received: (data) => {
        // Called when there's incoming data on the websocket for this channel
        // console.log("websocket received data!")
        // console.log(data)

        // Preventing repeated action for user who broadcasts, since they will
        // also receive the data they themselves broadcast out.
        // debugger
        switch (data.action) {
          case "subscribed":
            // When new used has joined chat, fetch user
            // props.fetchUsers()
            break;
          case "create":
            // if (data.message.user_id === props.currentUser.id) return;
            if (data.thread) return;
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
        pinned: message.pinned,
        pinnerId: message.pinner_id,
        createdAt: message.created_at,
        updatedAt: message.updated_at,
        giphy: message.giphy
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

    if (msg.parentMessageId) {
      return (
        <React.Fragment key={msg.id} ></React.Fragment>
      )
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
            {props.parent && <MessageFormContainer placeholderMsg={placeholderMsg} />}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ChatRoom;