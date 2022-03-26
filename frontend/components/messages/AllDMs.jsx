import React, { useEffect, useState } from "react";
import NewDmSearch from "./NewDMSearch";
import MessageItemContainer from "./MessageItemContainer";

function AllDMs(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [dms, setDms] = useState(props.messages);

  useEffect(() => {
    setDms(props.messages);
  }, [props.messages])

  useEffect(() => {
    setDms(props.messages);
  }, [])

  const display = dms.map((msg) => {
    return (
      <MessageItemContainer 
        key={msg.message.id} 
        message={msg.message} 
      />
    )
  })

  return (
    <div className="DraftMessage" >
      <div className="DraftMessage__info">
        <h2>All direct messages</h2>
        
        <div className="DraftMessage__search">
          <label htmlFor="NewMessage__search-label" >To:</label>
          <input 
            id="NewMessage__search-input"
            type="text" 
            placeholder="Find members" 
            onChange={(e) => setSearchQuery(e.target.value) } 
          />
        </div>

        <NewDmSearch searchQuery={searchQuery} users={props.users} currentUserId={props.currentUserId} />
      </div>

      <ul>
        <li>Sort through user's Conversations</li>
        {display}
      </ul>
    </div>
  )
}

export default AllDMs;