import React, {useState, useEffect} from "react";
import SearchResults from "./SearchResults";

function ConversationModal(props) {
  const [searchQuery, setSearchQuery] = useState("");

  let memberNames = []

  const displayPics = Object.values(props.filteredUsers).map((user) => {
    if (user.id !== props.currentUserId) memberNames.push((user.displayName) ? user.displayName : user.email)
    return (
      <li key={user.id} className="ConversationModal__search-display-users" onClick={() => handleProfile(user)} >
        <img src={(user.profilePictureUrl) ? user.profilePictureUrl : "https://templesinaidc.org/wp-content/uploads/sites/57/2019/12/gray-square.jpg" } alt="User profile picture" />
        <span>{`${(user.displayName) ? user.displayName : user.email} ${(user.id === props.currentUserId) ? "(you)" : "" }`}</span>
      </li>)
  })

  const handleProfile = (user) => {
    props.openRightSidebar({
      type: "Profile",
      user: user
    }) 
    props.closeModal()
  }

  return (
    <div className="ConversationModal">
      <h2>
        {memberNames.join(", ")}
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
        convoId={props.chat.id} 
        currentUserId={props.currentUserId}
        addMember={props.addMember} 
        removeMember = {props.removeMember}
      />

      {(searchQuery === "") && 
        <ul className="ConversationModal__members">
          {displayPics && displayPics}
        </ul>
      }

    </div>
  )
}

export default ConversationModal;