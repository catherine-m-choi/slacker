import React from "react";

function SearchUsers(props) {

  const filteredUsers = Object.values(props.users).filter((user) => {
    // debugger
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
    <div>
      <ul>
        {filteredUsers.map((user) => (
            <li key={user.id} onClick={ () => {
              props.setRecipients(props.recipients.concat(user.id))
            }} >{user.email}</li>
        ))}
      </ul>
    </div>
  )
}

export default SearchUsers;