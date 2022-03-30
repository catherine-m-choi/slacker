import React, { useEffect, useState } from "react";
import ConversationIndexItem from "./ConversationIndexItem";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ConversationIndex(props) {
  
  useEffect(() => {
    props.fetchConvos()
  }, [])
  
  return (
    <div className="ConversationIndex">
      <div className="AppLeftBar__section-header">
        <div className="AppLeftBar__section-header-dropdown">
          <span className="material-icons-outlined">arrow_drop_down</span>
        </div>
        <div className="AppLeftBar__section-header-name">
          <div>Direct Messages</div>
          <Link to="/app/all-dms">
            <span className="material-icons-outlined">add</span>
          </Link>
        </div>
      </div>

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