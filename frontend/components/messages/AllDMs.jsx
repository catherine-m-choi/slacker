import React, { useState } from "react";
import NewDmSearch from "./NewDMSearch";

function AllDMs(props) {
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div>
      <h2>All direct messages</h2>
      
      <label>To: 
        <input 
          type="text" 
          placeholder="Find members" 
          onChange={(e) => setSearchQuery(e.target.value) } 
        />
      </label>

      <NewDmSearch searchQuery={searchQuery} users={props.users} currentUserId={props.currentUserId} />

      <ul>
        <li>Sort through user's Conversations</li>
      </ul>
    </div>
  )
}

export default AllDMs;