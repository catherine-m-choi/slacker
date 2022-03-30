import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";

function ChannelIndexItem(props) {

  let memberNames = []

  const display = props.channel.members && props.channel.members.map((userId) => {
    let user = props.users[userId]
    if (user && user.id !== props.currentUserId) memberNames.push((user.displayName) ? user.displayName : user.email)
  })

  const displayIcon = (props.channel.private) ?
  (<span className="material-icons-outlined">lock</span>) :
  (<span className="material-icons-outlined">tag</span>)

  let status="";
  if (props.location.pathname.includes("app/channels/")) {
    const arr = props.location.pathname.split("/")
    const id = arr[arr.length - 1]
    if (props.channel && String(props.channel.id) === id ) {
      status = "active"
    }
  }
  
  return (
    <Link to={`/app/channels/${props.channel.id}`} >
        <li className={status}>
          <div className="ChannelIndexItem__icon" >
            {displayIcon}
          </div>
        <div>
          {props.channel.name}
        </div>
      </li>
    </Link>
  )
}

export default withRouter(ChannelIndexItem);