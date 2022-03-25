import React, {useEffect, useState} from "react";
import { withRouter } from "react-router-dom";
import NewDmSearch from "./NewDMSearch";
import SearchUsers from "./SearchUsers";
import MessageFormContainer from "./MessageFormContainer";

function DraftMessage(props) {
  const [searchQuery, setSearchQuery] = useState("");
  // debugger
  if (!props.location) return <div></div>;
  const [recipients, setRecipients] = useState((props.location.recepientId) ? [props.location.recepientId] : [] );

  useEffect(() => {
    console.log(recipients)
    if (recipients.length === 0) {
      console.log("should redirect to dm search")
    }
  }, [recipients])

  // debugger

  const displayUsers = recipients.map((userId) => {
    let user = props.users[userId]
    // debugger
    if (!user) return <div key={userId} ></div>
    return (
      <div key={user.id} >
        <img src={
          (user.profilePictureUrl) ? 
          user.profilePictureUrl : 
            "https://templesinaidc.org/wp-content/uploads/sites/57/2019/12/gray-square.jpg"}  
            height="40px" 
            width="40px"  
            alt="User profile picture" 
        />
        {user.email}
      </div>
    )
  })

  let searchUsersBar;
  let recipientNames = [];
  let recipientImages;

  recipients.forEach((userId) => {
    let user = props.users[userId]
    if (user) {
      recipientNames.push(user.email);
    }
  })

  let prettyNames;
  if (recipientNames.length === 1 ) {
    prettyNames = recipientNames
  } else if (recipients.length === 2 ) {
    prettyNames = recipientNames.join(" and ")
  } else {
    const slicedNames = recipientNames.slice(0, recipientNames.length - 1)
    console.log(slicedNames);
    console.log(recipientNames)
    prettyNames = slicedNames.join(", ") + `, and ${recipientNames[recipientNames.length - 1]}`
  }
  
  return (
    <div>
      <h2>New message</h2>

      <label>To: 
        {displayUsers}

        <input 
          type="text" 
          placeholder="Find members" 
          onChange={(e) => setSearchQuery(e.target.value) } 
        />

        <SearchUsers 
          searchQuery={searchQuery} 
          users={props.users} 
          recipients={recipients} 
          setRecipients={setRecipients} 
          currentUserId={props.currentUserId}
        />

        <br />

        <div>This is the very beginning of your direct message history with {prettyNames}. Only the {recipients.length + 1} of you are in this conversation.</div>
      </label>

      <MessageFormContainer recipients={[...recipients, props.currentUserId]} />
    </div>
  )
}


import { connect } from "react-redux";

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.entities.users,
    currentUserId: state.session.id,
  }
}

export default withRouter(connect(mapStateToProps, null)(DraftMessage));