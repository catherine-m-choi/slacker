import React, {useState} from "react";
import SearchResults from "./SearchResults";
import { beautifyDate } from "../../util/date_util";

function ChannelModal(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [tab, setTab] = useState(props.tab) // toggle between "info" and "description tabs"

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
            addMember={props.addMember} 
            convoId={props.chat.id} 
            currentUserId={props.currentUserId}
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
        <div>
          <div>
            <p>Topic</p>
            <div>{props.chat.topic}</div>
          </div>
          <div>
            <p>Description</p>
            <div>{props.chat.description}</div>
          </div>
          <div>
            <p>Created by</p>
            <div>{`${props.users[props.chat.founderId].displayName} on ${beautifyDate(props.chat.createdAt)}`} </div>
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

      <button onClick={() => setTab("description")} >Description</button>
      <button onClick={() => setTab("members")} >Members {props.chat.members.length}</button>

      {display}

    </div>
  )
}

export default ChannelModal;