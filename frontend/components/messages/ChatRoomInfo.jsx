import React, { useState, useEffect } from "react";

function ChatRoomInfo(props) {

  // let memberNames = []

  if (!props.currentChat) return <div></div>
  
  let placeholderCount = 0;
  const displayPics = props.currentChat.members && props.currentChat.members.slice(0,3).map((userId) => {
    let user = props.users[userId]
    if (user) {
      return <img  key={user.id} src={(user.profilePictureUrl) ? user.profilePictureUrl : "https://templesinaidc.org/wp-content/uploads/sites/57/2019/12/gray-square.jpg"}  alt="User profile picture" />
    } else {
      placeholderCount += 1;
      return <React.Fragment key={placeholderCount}></React.Fragment>
    }
  })

  const displayIcon = (props.currentChat.private) ?
  (<span className="material-icons-outlined">lock</span>) :
  (<span className="material-icons-outlined">tag</span>)

  const handleChatInfoModal = (def) => {
    if (props.chatType === "Conversation") {
      return props.openModal("convo/addMembers") 
    } else if (props.chatType === "Channel") {
      return props.openModal(`channel/modal-${def}`) 
    }
  }

  let memberNames = []
  let prettyNames;
  if (props.chatType === "Conversation") {
    if (props.currentChat.members && props.currentChat.members.length === 1) {
      if (props.users[props.currentUserId].displayName) {
        memberNames = [`${props.users[props.currentUserId].displayName} (you)`];
      } else {
        memberNames = [`${props.users[props.currentUserId].email} (you)`];
      }
      // debugger
    } else {
      props.currentChat.members && props.currentChat.members.map((userId) => {
        let user = props.users[userId]
        if (user && user.id !== props.currentUserId) memberNames.push((user.displayName) ? user.displayName : user.email)
      })
    }

    if (memberNames.length === 1 ) {
      prettyNames = memberNames
    } else if (memberNames.length === 2 ) {
      prettyNames = memberNames.join(" and ")
    } else {
      const slicedNames = memberNames.slice(0, memberNames.length - 1)
      prettyNames = slicedNames.join(", ")  + ((memberNames.length > 2) ? "," : "") + ` and ${memberNames[memberNames.length - 1]}`
    }
  }

  return (
    <div>
      <div className="ChatRoomInfo">
        <ul className="ChatRoomInfo__members"  onClick={() => handleChatInfoModal("description") } >
          {(props.chatType === "Conversation") ? 
          prettyNames : 
          <div>
            {displayIcon}
            {props.currentChat.name }
          </div>}
        </ul>

        <ul className="ChatRoomInfo__profile-pictures"  onClick={() => handleChatInfoModal("members") } >
          {displayPics && displayPics}
          <div className="ChatRoomInfo__member-count" >{props.currentChat.members && props.currentChat.members.length}</div>
        </ul>
        
      </div>

      {(props.currentChat.pinnedMessages.length > 0) && 
      <div className="ChatRoomInfo__pinned-message" onClick={() => props.openModal("convo/pinnedMessages") } >
        <div className="ChatRoomInfo__pinned-btn">
          <i className="material-icons">push_pin</i>
          <div>
            {props.currentChat.pinnedMessages.length} Pinned
          </div>
        </div>
      </div>
      }
    </div>
      
  )
}

export default ChatRoomInfo;