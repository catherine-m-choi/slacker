import React, { useEffect, useState } from "react";
import ConversationIndexItem from "./ConversationIndexItem";

function ConversationIndex(props) {
  
  useEffect(() => {
    props.fetchConvos();
  }, [])
  
  return (
    <div className="ConversationIndex">
      [Direct Messages]
      {Object.values(props.conversations).map((convo) => {
        return (
          <ConversationIndexItem key={convo.id} conversation={convo} fetchConvos={props.fetchConvos} />
        )
      })}
    </div>
  )
}

export default ConversationIndex;