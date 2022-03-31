import React, { useEffect, useState } from "react";
import ConversationIndexItem from "./ConversationIndexItem";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function ConversationIndex(props) {

  const [showItems, setShowItems] = useState(true);
  
  useEffect(() => {
    props.fetchConvos()
  }, [])
  
  return (
    <div className="ConversationIndex">
      <div className="AppLeftBar__section-header" >
        <div className="AppLeftBar__section-header-dropdown">
        {(showItems
          ) ? ( 
            <span className="material-icons-outlined" onClick={() => setShowItems(!showItems)} >arrow_drop_down</span>
            ) : (
            <span className="material-icons-outlined" onClick={() => setShowItems(!showItems)} >arrow_right</span>
          )}
        </div>
        <div className="AppLeftBar__section-header-name">
          <div onClick={() => setShowItems(!showItems)} >Direct Messages</div>
          <Link to="/app/all-dms">
            <span className="material-icons-outlined">add</span>
          </Link>
        </div>
      </div>

      {(showItems) && ( 

        <ul className="ConversationIndexItems__container">
          {Object.values(props.conversations).map((convo) => {
            return (
              <ConversationIndexItem key={convo.id} conversation={convo} fetchConvos={props.fetchConvos} users={props.users} currentUserId={props.currentUserId} />
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default ConversationIndex;