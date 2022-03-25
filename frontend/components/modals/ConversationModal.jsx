import React, {useState, useEffect} from "react";
import SearchResults from "./SearchResults";

function ConversationModal(props) {
  const [searchQuery, setSearchQuery] = useState("");

  let memberNames = []

  const displayPics = Object.values(props.filteredUsers).map((user) => {
    memberNames.push(user.email)
    return <li key={user.id} ><img src={(user.profilePictureUrl) ? user.profilePictureUrl : "https://templesinaidc.org/wp-content/uploads/sites/57/2019/12/gray-square.jpg" } alt="User profile picture" height="40px" width="40px" /> <span>{user.email}</span></li>
  })

  return (
    <div>
      <h1>[Convo Modal]</h1>
      <div>{memberNames.join(", ")}</div>

      <div>SEARCH BAR</div>
      <input type="text" placeholder="Find members" onChange={(e) => setSearchQuery(e.target.value) } />
      <SearchResults 
        searchQuery={searchQuery} 
        users={props.users} 
        members={props.filteredUsers} 
        addMember={props.addMember} 
        convoId={props.conversation.id} 
      />

      <br />
      <br />

      <ul className="ChatRoomInfo__members">
      <li><img src="https://templesinaidc.org/wp-content/uploads/sites/57/2019/12/gray-square.jpg" height="40px" width="40px" /><button>Add people</button></li>
        {displayPics && displayPics}
      </ul>

      <br />
      <button onClick={ props.closeModal } >Close Modal</button>
    </div>
  )
}

export default ConversationModal;