import React, {useState, useEffect} from "react";
import SearchResults from "./SearchResults";

function ChannelModal(props) {
  const [searchQuery, setSearchQuery] = useState("");

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
  )
}

export default ChannelModal;