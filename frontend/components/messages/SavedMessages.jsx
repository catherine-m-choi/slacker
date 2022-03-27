import React, { useEffect, useState } from "react";
import MessageItemContainer from "./MessageItemContainer";

function SavedMessages(props) {
  // const [savedMsgs, setSavedMsgs] = useState(props.savedMessages);
  // const [savedMsgs, setSavedMsgs] = useState(props.savedMessagesIds);
  
  // useEffect(() => {
  //   props.fetchSavedMessages().then((res) => {
  //     setSavedMsgs(Object.values(res.payload))
  //   });
  // }, [])

  // useEffect(() => {
  //   let filteredMsgs;
  //   props.savedMessagesIds.forEach((id) => {
  //     filteredMsgs.push(props.messages[id])
  //   });
  //   setSavedMsgs(filteredMsgs)
  //   debugger
  // }, [props.savedMessages])

  const [savedMsgs, setSavedMsgs] = useState(props.savedMessagesIds);

  useEffect(() => {
    setSavedMsgs(props.savedMessages);
  }, [props.savedMessages])

  useEffect(() => {
    props.fetchSavedMessages()
  }, [])

  let display;
  if (savedMsgs) {
    // debugger
    display = savedMsgs.reverse().map((msg) => {
      if (!msg) return <></>
      return (
        <MessageItemContainer 
          key={msg.id} 
          message={msg} 
        />
      )
    })
  } else {
    display = <div>Nothing here...... (T^T)</div>
  }
  
  // debugger
  return (
    <div>Saved Messages Yo
      {display}
    </div>
  )
}

export default SavedMessages;