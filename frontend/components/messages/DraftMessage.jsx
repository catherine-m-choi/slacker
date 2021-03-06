import React, {useEffect, useState} from "react";
import { withRouter } from "react-router-dom";
import SearchUsers from "./SearchUsers";
import MessageFormContainer from "./MessageFormContainer";

function DraftMessage(props) {
  const [searchQuery, setSearchQuery] = useState("");
  if (!props.location) return <div></div>;
  const [recipients, setRecipients] = useState((props.location.recepientId) ? [props.location.recepientId] : [] );
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // console.log(recipients)
    if (recipients.length === 0) {
      // console.log("should redirect to dm search")
    }
  }, [recipients])

  const onKeyDown = (e) => {
    if (searchQuery === "" && e.keyCode === 8) {
      setRecipients(recipients.slice(0,recipients.length - 1))
    }
  }

  const expand = () => {
    setExpanded(true);
  }
  
  const close = () => {
    setExpanded(false);
  }

  const displayUsers = recipients.map((userId) => {
    let user = props.users[userId]
    // debugger
    if (!user) return <div key={userId} ></div>
    return (
      <div key={user.id} className="DraftMessage__search-display-users" >
        <img src={
          (user.profilePictureUrl) ? 
          user.profilePictureUrl : 
            "https://templesinaidc.org/wp-content/uploads/sites/57/2019/12/gray-square.jpg"}  
            alt="User profile picture" 
        />
        {(user.displayName) ? user.displayName : user.email}
      </div>
    )
  })

  let recipientNames = [];

  recipients.forEach((userId) => {
    let user = props.users[userId]
    if (user) {
      recipientNames.push((user.displayName) ? user.displayName : user.email);
    }
  })

  let prettyNames;
  if (recipientNames.length === 1 ) {
    prettyNames = recipientNames
  } else if (recipients.length === 2 ) {
    prettyNames = recipientNames.join(" and ")
  } else {
    const slicedNames = recipientNames.slice(0, recipientNames.length - 1)
    prettyNames = slicedNames.join(", ")  + ((recipientNames.length > 2) ? "," : "") + ` and ${recipientNames[recipientNames.length - 1]}`
  }

  
  return (
    <div className="DraftMessage" >
      <div className="DraftMessage__info">
        <div className="DraftMessage__title">
          <h2>New message</h2>
        </div>

          <div className="DraftMessage__search">
            <label htmlFor="DraftMessage__search-label" >To:</label>
            {displayUsers}
            <input id="DraftMessage__search-input"
              type="text" 
              placeholder="Find members" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={onKeyDown}
              onFocus={expand}
              autoComplete="off"
            />
          </div>

          {expanded ? (
            <div className="SearchUsers__hidden-background" 
              onClick={() => close()} >
              <SearchUsers 
                searchQuery={searchQuery} 
                users={props.users} 
                recipients={recipients} 
                setRecipients={setRecipients} 
                currentUserId={props.currentUserId}
                setSearchQuery={setSearchQuery}
                />
            </div>
          ) : null}

      </div>

      {(recipients.length > 0) && <div className="DraftMessage__content">This is the very beginning of your direct message history with {prettyNames}. Only the {recipients.length + 1} of you are in this conversation.</div>}

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