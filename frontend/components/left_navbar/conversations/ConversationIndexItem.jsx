import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

function ConversationIndexItem(props) {
  let memberNames = []

  let display;
  if (props.conversation.members && props.conversation.members.length === 1) {
    if (props.users[props.currentUserId].displayName) {
      display = props.users[props.currentUserId].displayName
    } else {
      display = props.users[props.currentUserId].email
    }
    memberNames.push(`${display} (you)`)
  } else {
    display = props.conversation.members && props.conversation.members.map((userId) => {
      let user = props.users[userId]
      if (user && user.id !== props.currentUserId) memberNames.push((user.displayName) ? user.displayName : user.email)
    })
  }

  let displayImage;
  if (memberNames.length === 1) {
    displayImage = <img  src={(props.users[props.currentUserId].profilePictureUrl) ? props.users[props.currentUserId].profilePictureUrl : "https://templesinaidc.org/wp-content/uploads/sites/57/2019/12/gray-square.jpg"}alt="User profile picture" />
  }
  else if (memberNames.length > 1) {
    displayImage = <div className="ConversationIndexItems__member-count" >
      <div>
        {memberNames.length}
      </div>
    </div>
  }
  else if (props.conversation.members[0] !== props.currentUserId) {
    let userForPic = props.users[props.conversation.members[0]]
    if (userForPic) {
      displayImage = <img  src={(userForPic.profilePictureUrl) ? userForPic.profilePictureUrl : "https://templesinaidc.org/wp-content/uploads/sites/57/2019/12/gray-square.jpg"}alt="User profile picture" />
    }
  } else {
    let userForPic = props.users[props.conversation.members[1]]
    if (userForPic) {
      displayImage = <img  src={(userForPic.profilePictureUrl) ? userForPic.profilePictureUrl : "https://templesinaidc.org/wp-content/uploads/sites/57/2019/12/gray-square.jpg"}alt="User profile picture" />
    }
  }

  let status="";
  if (props.location.pathname.includes("app/conversations/")) {
    const arr = props.location.pathname.split("/")
    const id = arr[arr.length - 1]
    if (props.conversation && String(props.conversation.id) === id ) {
      status = "active"
    }
  }
  
  return (
    <Link to={`/app/conversations/${props.conversation.id}`} >
        <li className={status}>
        {displayImage}
        {/* <div>
          {(memberNames.length > 1) && memberNames.length } 
        </div> */}
        <div className="ConversationIndexItems__member-names">
          {memberNames && memberNames.join(", ")}
        </div>
      </li>
    </Link>
  )
}

export default withRouter(ConversationIndexItem);