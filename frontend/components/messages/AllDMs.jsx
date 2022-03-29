import React, { useEffect, useState } from "react";
import NewDmSearch from "./NewDMSearch";
// import MessageItemContainer from "./MessageItemContainer";
import MessageItemCardContainer from "./MessageItemCardContainer";

function AllDMs(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [dms, setDms] = useState(props.messages);
  const [lastest, setLatest] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setDms(props.messages);
    setLatest(!lastest)
  }, [props.messages])

  useEffect(() => {
    setDms(props.messages);
    setLatest(!lastest)
  }, [])


  const expand = () => {
    setExpanded(true);
  }

  const close = () => {
      setExpanded(false);
  }

  const display = dms.map((msg) => {
    return (
      <MessageItemCardContainer 
        key={msg.message.id} 
        message={msg.message} 
      />
    )
  })

  return (
    <div className="DraftMessage DMContainer" >
      <div className="DraftMessage__info">
        <div className="DraftMessage__title">
          <h2>All direct messages</h2>
        </div>
        
        <div className="DraftMessage__search">
          <label htmlFor="NewMessage__search-label" >To:</label>
          <input 
            id="NewMessage__search-input"
            type="text" 
            placeholder="Find members" 
            onChange={(e) => setSearchQuery(e.target.value) } 
            onFocus={expand} 
          />
        </div>

        {expanded ? (
          <div className="SearchUsers__hidden-background" 
            onClick={() => close()} >
              
            <NewDmSearch searchQuery={searchQuery} users={props.users} currentUserId={props.currentUserId} />
          </div>
        ) : null}

      </div>

      <ul className="AllDMs">
        {display}
      </ul>
    </div>
  )
}

export default AllDMs;