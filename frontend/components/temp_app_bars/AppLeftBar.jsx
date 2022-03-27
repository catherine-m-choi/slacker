import React from "react";
import ConversationIndexContainer from "../conversations/ConversationIndexContainer";
import { Link } from "react-router-dom";

function AppLeftBar(props) {
  return (
    <div className="AppLeftBar__container">

      <div className="ChatRoomInfo">
        <h1>Parks and Recreation of Pawnee</h1>
        <Link to="/app/drafts" >
          <div >
            <span className="material-icons-outlined">post_add</span>
          </div>
        </Link>
      </div>

      <div className="ChatRoom__container">
        <div className="ChatRoom">
          <br />
          <ul className="AppLeftBar__menu-btns">
            <li><i className="material-icons-outlined">comment</i>Threads</li>
            <Link to="/app/all-dms"><li><i className="material-icons-outlined">forum</i>All DMs</li></Link>
            <li><i className="material-icons-outlined">alternate_email</i>Mentions & Reactions</li>
            <li><i className="material-icons-outlined">save_as</i>Drafts</li>
            <Link to="/app/saved-page"><li><i className="material-icons-outlined">bookmark_border</i>Saved Items</li></Link>
          </ul>
          <br />

          <div className="AppLeftBar__section-header">
            <div className="AppLeftBar__section-header-dropdown">
              <span className="material-icons-outlined">arrow_drop_down</span>
            </div>
            <div className="AppLeftBar__section-header-name">
              <div>Starred</div>
              <span className="material-icons-outlined">add</span>
            </div>
          </div>

          <div className="AppLeftBar__section-header">
            <div className="AppLeftBar__section-header-dropdown">
              <span className="material-icons-outlined">arrow_drop_down</span>
            </div>
            <div className="AppLeftBar__section-header-name">
              <div>Channels</div>
              <span className="material-icons-outlined">add</span>
            </div>
          </div>

          <ConversationIndexContainer />
        </div>
      </div>
    </div>
  )
}

export default AppLeftBar;