import React, {useState} from "react";
import SearchResults from "./SearchResults";
import { beautifyDate } from "../../util/date_util";

function ChannelModal(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [tab, setTab] = useState(props.tab) // toggle between "members" and "description tabs"

  let memberNames = []

  const displayPics = Object.values(props.filteredUsers).map((user) => {
    if (user.id !== props.currentUserId) memberNames.push((user.displayName) ? user.displayName : user.email)
    return (
      <li key={user.id} className="ConversationModal__search-display-users" >
        <img src={(user.profilePictureUrl) ? user.profilePictureUrl : "https://templesinaidc.org/wp-content/uploads/sites/57/2019/12/gray-square.jpg" } alt="User profile picture" />
        <span>{`${(user.displayName) ? user.displayName : user.email} ${(user.id === props.currentUserId) ? "(you)" : "" }`}</span>
      </li>)
  })

  const displayIcon = (props.chat.private) ?
  (<span className="material-icons-outlined">lock</span>) :
  (<span className="material-icons-outlined">tag</span>)

  let display;
  switch (tab) {
    case "members":
      display = 
        <div className="ConversationModal__tab-content" >
          <div className="ConversationModal__search-bar">
            <label aria-label="users search bar" >
              <span className="material-icons-outlined">search</span>
            </label>

            <input type="text" placeholder="Find members" onChange={(e) => setSearchQuery(e.target.value) } />
          </div>

          <SearchResults 
            searchQuery={searchQuery} 
            users={props.users} 
            members={props.filteredUsers} 
            convoId={props.chat.id} 
            currentUserId={props.currentUserId}
            chatType="channel"
            addMember={props.addMember} 
            removeMember = {props.removeMember}
          />

          {(searchQuery === "") && 
            <ul className="ConversationModal__members">
              {displayPics && displayPics}
            </ul>
          }
        </div>
      break;
    case "description":
      display = 
        <div className="ChannelModal__tab-content" >
          <div className="ChannelModal__tab-card">
            <div>Topic</div>
            <p>{props.chat.topic}</p>
            <div className="ChannelModal__tab-edit">Edit</div>
          </div>
          <div className="ChannelModal__tab-card">
            <div>Description</div>
            <p>{props.chat.description}</p>
            <div className="ChannelModal__tab-edit">Edit</div>
          </div>
          <div className="ChannelModal__tab-card">
            <div>Created by</div>
            <p>{`${props.users[props.chat.founderId].displayName} on ${beautifyDate(props.chat.createdAt)}`} </p>
          </div>
          
        </div>
      break;
    default:
      break;
  }

  return (
    <div className="ConversationModal">
      <h2>
        {displayIcon}
        {props.chat.name}
      </h2>
      <div className="ConversationModal__close" onClick={ props.closeModal } >
        <span className="material-icons-outlined" >
          close
        </span>
      </div>

      <div className="ConversationModal__tabs">
        <button className={(tab === "description") ? "active" : null } onClick={() => setTab("description")} >Description</button>
        <button className={(tab === "members") ? "active" : null } onClick={() => setTab("members")} >Members {props.chat.members.length}</button>
      </div>

      <div className="ChannelModal__tab-content-container">
        {display}
      </div>

    </div>
  )
}

export default ChannelModal;