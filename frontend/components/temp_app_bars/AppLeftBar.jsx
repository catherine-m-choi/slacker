import React from "react";
import ConversationIndexContainer from "../conversations/ConversationIndexContainer";
import { Link } from "react-router-dom";

function AppLeftBar(props) {
  return (
    <div className="AppLeftBar__container">

      <div className="ChatRoomInfo">
        <h1>Parks and Recreation of Pawnee</h1>
      </div>

      <div className="ChatRoom__container">
        <div className="ChatRoom">
          <br />
          <ul>
            <li><i className="material-icons-outlined">comment</i>Threads</li>
            <li><Link to="/app/all-dms"><i className="material-icons-outlined">forum</i>All DMs</Link></li>
            <li><i className="material-icons-outlined">alternate_email</i>Mentions & Reactions</li>
            <li><i className="material-icons-outlined">save_as</i>Drafts</li>
            <li><Link to="/app/saved-page"><i className="material-icons-outlined">bookmark_border</i>Saved Items</Link></li>
          </ul>
          <br />
          <div>Starred</div>
          <br />
          <div>Channels</div>
          <br />
          <ConversationIndexContainer />
        </div>
      </div>
    </div>
  )
}

export default AppLeftBar;