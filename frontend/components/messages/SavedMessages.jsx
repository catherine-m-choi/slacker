import React, { useEffect, useState } from "react";
import MessageItemContainer from "./MessageItemContainer";
import MessageItemCardContainer from "./MessageItemCardContainer";

function SavedMessages(props) {

  const [savedMsgs, setSavedMsgs] = useState(props.savedMessagesIds);

  useEffect(() => {
    setSavedMsgs(props.savedMessages);
  }, [props.savedMessages])

  useEffect(() => {
    props.fetchSavedMessages()
  }, [])

  let display;
  if (savedMsgs) {
    display = savedMsgs.map((msg) => {
      if (!msg) return <></>
      return (
        <MessageItemCardContainer 
          key={msg.id} 
          message={msg} 
        />
      )
    })
  } else {
    display = <div>Nothing here...... (T^T)</div>
  }
  
  // debugger
  // <div>
  //   <div className="DraftMessage" >
  //     <div className="DraftMessage__info">
  //       Saved Messages Yo
  //     </div>
  //   </div>
  return (
    <div className="DraftMessage SavedMessages" >
      <div className="DraftMessage__info">
        <div className="DraftMessage__title">
          <h2>Saved messages</h2>
        </div>
      </div>

      <ul className="AllDMs SavedMessages">
        {display}
      </ul>
    </div>
  )
}

export default SavedMessages;