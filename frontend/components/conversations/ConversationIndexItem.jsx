import React from "react";
import { Link } from "react-router-dom";

function ConversationIndexItem(props) {
  return (
    <div>
      <Link to={`/app/conversations/${props.conversation.id}`} >
        [I'm a convo yo] - id#: {props.conversation.id}
      </Link>
    </div>
  )
}

export default ConversationIndexItem;