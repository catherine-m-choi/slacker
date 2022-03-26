import React from "react";

function SearchResults(props) {

  let filteredUsersInChat;

  filteredUsersInChat = Object.values(props.members).filter((user) => {
    if (props.searchQuery === '') {
      return;
    }
    else {
      return user.email.includes(props.searchQuery)
    }
  })
    
  
  const filteredUsersNotInChat = Object.values(props.users).filter((user) => {
    // debugger
    if (props.searchQuery === '') {
      return;
    } else if (Object.keys(props.members).includes(String(user.id))) {
      return;
    }
    else {
      return user.email.includes(props.searchQuery)
    }
  })

  return (
    ((props.searchQuery !== "") && (filteredUsersInChat.length + filteredUsersNotInChat.length === 0 )) 
      ? <div  className="SearchResults__no-matches" >No matches found for <span>{props.searchQuery}</span></div> : 
    <div className={`SearchResults ${(props.searchQuery === "") && "hidden" }`} >
      <ul className="SearchResults__in-channel" >
        {(props.searchQuery !== "") && <h3>In this channel</h3> }
        {(filteredUsersInChat.length > 0 || props.searchQuery === "" ) ? filteredUsersInChat.map((user) => (
            <li key={user.id} className="ConversationModal__search-display-users" >
              <div>
                <img src={(user.profilePictureUrl) ? user.profilePictureUrl : "https://templesinaidc.org/wp-content/uploads/sites/57/2019/12/gray-square.jpg" } alt="User profile picture" />
                <span>{user.email}</span>
              </div>
              <button onClick={(e) => console.log("Add Remove action later")} >Remove</button>
            </li>
        )) : <div>No matches in this channel</div>}
      </ul>
      <ul className="SearchResults__not-in-channel" >
        {(props.searchQuery !== "") && <h3>Not in this channel</h3> }
        {(filteredUsersNotInChat.length > 0 || props.searchQuery === "" ) ? filteredUsersNotInChat.map((user) => (
            <li key={user.id} className="ConversationModal__search-display-users" >
              <div>
                <img src={(user.profilePictureUrl) ? user.profilePictureUrl : "https://templesinaidc.org/wp-content/uploads/sites/57/2019/12/gray-square.jpg" } alt="User profile picture" />
                <span>{(user.displayName) ? user.displayName : user.email }</span>
              </div>
              <button onClick={(e) => props.addMember(user.id, props.convoId)} >Add</button>
            </li>
        )) : <div>No matches not in this channel</div>}
      </ul>
    </div>
  )
}

export default SearchResults;