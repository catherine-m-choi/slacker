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
      <div className="AppLeftBar__section-header">
        <div className="AppLeftBar__section-header-dropdown">
          <span class="material-icons-outlined">arrow_drop_down</span>
        </div>
        <div className="AppLeftBar__section-header-name">
          <div>Direct Messages</div>
          <Link to="/app/all-dms">
            <span class="material-icons-outlined">add</span>
          </Link>
        </div>
      </div>

      {/* <br />
      Direct Messages  <Link to="/app/all-dms">+</Link> */}

      <ul className="ConversationIndexItems__container">
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