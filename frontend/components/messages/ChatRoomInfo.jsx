import React, { useState, useEffect } from "react";

function ChatRoomInfo(props) {
  const [currentChat, setcurrentChat] = useState(props.chats[props.match.params.id])

  useEffect(() => {
    if (Object.keys(props.chats).length === 0) {
      props.fetchConvos().then( (res) => {
        const currentChat = res.payload[props.match.params.id]
        setcurrentChat(currentChat);
      }).then(console.log("From ChatRoomInfo"))
    } else {
      const currentChat = props.chats[props.match.params.id]
      setcurrentChat(currentChat);
    }
  }, [props.match.params.id])

  let memberNames = []

  if (!currentChat) return <div></div>
  
  const displayPics = currentChat.members && currentChat.members.map((userId) => {
    let user = props.users[userId]
    if (user.id !== props.currentUserId) memberNames.push((user.displayName) ? user.displayName : user.email)
    // return <div key={user.id}>{user.displayName}</div> 
    return <img  key={user.id} src={(user.profilePictureUrl) ? user.profilePictureUrl : "https://templesinaidc.org/wp-content/uploads/sites/57/2019/12/gray-square.jpg"}  alt="User profile picture" />
  })

  const displayIcon = (props.currentChat.private) ?
  (<span className="material-icons-outlined">lock</span>) :
  (<span className="material-icons-outlined">tag</span>)

  return (
    <div>
      <div className="ChatRoomInfo">
        <ul className="ChatRoomInfo__members"  onClick={() => props.openModal("convo/addMembers") } >
          {(props.chatType === "Conversation") ? 
          memberNames.join(", ") : 
          <div>
            {displayIcon}
            {props.currentChat.name }
          </div>}
        </ul>

        <ul className="ChatRoomInfo__profile-pictures"  onClick={() => props.openModal("convo/addMembers") } >
          {displayPics && displayPics}
          <div className="ChatRoomInfo__member-count" >{currentChat.members && currentChat.members.length}</div>
        </ul>
        
      </div>

      <div onClick={() => props.openModal("convo/pinnedMessages") } >
        <i className="material-icons">push_pin</i> {currentChat.pinnedMessages.length} Pinned
      </div>
    </div>
      
  )
}

export default ChatRoomInfo;