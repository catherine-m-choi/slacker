import React, { useEffect, useState } from "react";
import ConversationIndexItem from "./ConversationIndexItem";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ConversationIndex(props) {
  
  // Convos are already being fetched when App mounts
  useEffect(() => {
    props.fetchConvos()
  }, [])
  
  return (
    <div className="ConversationIndex">
      <ul>
        Direct Messages  <Link to="/app/all-dms">+</Link>
        {Object.values(props.conversations).map((convo) => {
          return (
            <ConversationIndexItem key={convo.id} conversation={convo} fetchConvos={props.fetchConvos} users={props.users} currentUserId={props.currentUserId} />
          )
        })}
      </ul>
    </div>
  )
}

export default ConversationIndex;