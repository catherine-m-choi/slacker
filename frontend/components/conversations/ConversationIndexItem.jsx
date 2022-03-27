import React from "react";
import { Link } from "react-router-dom";

function ConversationIndexItem(props) {
  let memberNames = []

  const display = props.conversation.members && props.conversation.members.map((convo) => {
    let user = props.users[convo]
    if (user.id !== props.currentUserId) memberNames.push((user.displayName) ? user.displayName : user.email)
  })

  let displayImage;
  if (props.conversation.members[0] !== props.currentUserId) {
    let userForPic = props.users[props.conversation.members[0]]
    if (userForPic) {
      displayImage = <img  src={(userForPic.profilePictureUrl) ? userForPic.profilePictureUrl : "https://templesinaidc.org/wp-content/uploads/sites/57/2019/12/gray-square.jpg"} height="25px" width="25px" alt="User profile picture" />
    }
  } else {
    let userForPic = props.users[props.conversation.members[1]]
    if (userForPic) {
      displayImage = <img  src={(userForPic.profilePictureUrl) ? userForPic.profilePictureUrl : "https://templesinaidc.org/wp-content/uploads/sites/57/2019/12/gray-square.jpg"} height="25px" width="25px" alt="User profile picture" />
    }
  }
  
  return (
    <div>
      <Link to={`/app/conversations/${props.conversation.id}`} >
        {displayImage}
        {(memberNames.length > 1) && memberNames.length } 
        {memberNames && memberNames.join(", ")}
      </Link>
    </div>
  )
}

export default ConversationIndexItem;