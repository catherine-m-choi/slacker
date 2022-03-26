import React from "react";

function SearchUsers(props) {

  const filteredUsers = Object.values(props.users).filter((user) => {
    if (props.searchQuery === '') {
      return;
    } else if (props.currentUserId === user.id) {
      return;
    } else if (props.recipients.includes(user.id)) {
      return;
    }
    else {
      return user.email.includes(props.searchQuery)
    }
  })

  return (
      <ul className="SearchUsers">
        {filteredUsers.map((user) => (
            <li key={user.id} onClick={ () => {
              props.setRecipients(props.recipients.concat(user.id))
              props.setSearchQuery("")
            }} >{user.email}</li>
        ))}
      </ul>
  )
}

export default SearchUsers;