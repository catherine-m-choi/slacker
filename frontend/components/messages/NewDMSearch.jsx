import React from "react";
import { Link } from "react-router-dom";

function NewDmSearch(props) {

  const filteredUsers = Object.values(props.users).filter((user) => {
    // debugger
    if (props.searchQuery === '') {
      return;
    } else if (props.currentUserId === user.id) {
      return;
    }
    else {
      return user.email.includes(props.searchQuery)
    }
  })

  return (
    <ul className="SearchUsers">
      {filteredUsers.map((user) => (
        <Link  key={user.id} to={{
          pathname: `/app/drafts`,
          recepientId: user.id
            }}>
            <li>
              {user.email}
            </li>
        </Link>
      ))}
    </ul>
  )
}

export default NewDmSearch;