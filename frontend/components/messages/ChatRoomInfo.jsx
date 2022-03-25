import React, { useState, useEffect } from "react";

function ChatRoomInfo(props) {
  const [currentConvo, setcurrentConvo] = useState([])

  useEffect(() => {
    props.fetchConvos().then( (res) => {
      const currentConvo = res.payload[props.match.params.id]
      setcurrentConvo(currentConvo);
    })
  }, [props.match.params.id])

  let memberNames = []

  if (!currentConvo) return <div></div>
  
  const displayPics = currentConvo.members && currentConvo.members.map((convo) => {
    let user = props.users[convo]
    if (user.id !== props.currentUserId) memberNames.push(user.email)
    // return <div key={user.id}>{user.email}</div> 
    return <img  key={user.id} src={(user.profilePictureUrl) ? user.profilePictureUrl : "https://templesinaidc.org/wp-content/uploads/sites/57/2019/12/gray-square.jpg"}  alt="User profile picture" />
  })

  return (
    <div className="ChatRoomInfo">
      <ul className="ChatRoomInfo__members"  onClick={() => props.openModal("convo/addMembers") } >
        {memberNames.join(", ")}
      </ul>

      <ul className="ChatRoomInfo__profile-pictures"  onClick={() => props.openModal("convo/addMembers") } >
        {displayPics && displayPics}
        <div className="ChatRoomInfo__member-count" >{currentConvo.members && currentConvo.members.length}</div>
      </ul>
      {/* <button onClick={() => props.openModal("convo/addMembers") } >Add a member</button> */}
    </div>
  )
}

export default ChatRoomInfo;