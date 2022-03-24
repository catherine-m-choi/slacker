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
    <div>
      <ul>
        {(filteredUsersInChat.length > 0 ) && <li>In this channel</li> }
        {filteredUsersInChat && filteredUsersInChat.map((user) => (
            <li key={user.id}>{user.email}</li>
        ))}
      </ul>
      <br />
      <ul>
        {(filteredUsersNotInChat.length > 0 ) && <li>Not in this channel</li> }
        {filteredUsersNotInChat.map((user) => (
            <li key={user.id}>{user.email} <button onClick={(e) => props.addMember(user.id, props.convoId)} >Add</button></li>
        ))}
      </ul>
    </div>
  )
}

export default SearchResults;