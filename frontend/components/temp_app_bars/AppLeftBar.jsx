import React from "react";
import ConversationIndexContainer from "../conversations/ConversationIndexContainer";

function AppLeftBar(props) {
  return (
    <div className="AppLeftBar__container">
      <h1>[Left Bar]</h1>
      <ConversationIndexContainer />
    </div>
  )
}

export default AppLeftBar;