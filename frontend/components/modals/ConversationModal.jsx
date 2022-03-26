import React, {useState, useEffect} from "react";
import SearchResults from "./SearchResults";

function ConversationModal(props) {
  const [searchQuery, setSearchQuery] = useState("");

  let memberNames = []

  const displayPics = Object.values(props.filteredUsers).map((user) => {
    if (user.id !== props.currentUserId) memberNames.push(user.email)
    return (
      <li key={user.id} className="ConversationModal__search-display-users" >
        <img src={(user.profilePictureUrl) ? user.profilePictureUrl : "https://templesinaidc.org/wp-content/uploads/sites/57/2019/12/gray-square.jpg" } alt="User profile picture" />
        <span>{user.email}</span>
      </li>)
  })

  return (
    <div className="ConversationModal">
      <h2>
        {memberNames.join(", ")}
      </h2>
      {/* <button className="ConversationModal__close" onClick={ props.closeModal } >Close Modal</button> */}
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
        convoId={props.conversation.id} 
      />

      {(searchQuery === "") && 
        <ul className="ConversationModal__members">
          {/* <li className="ConversationModal__search-display-users" ><img src="https://templesinaidc.org/wp-content/uploads/sites/57/2019/12/gray-square.jpg" /><button>Add people</button></li> */}
          {displayPics && displayPics}
        </ul>
      }

    </div>
  )
}

export default ConversationModal;