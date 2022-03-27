import React, { useEffect, useState } from "react";
import EditMessageForm from "./EditMessageForm";

function MessageItem({
  message, sender, displayDate, deleteMessageDB, patchMessageDB, openRightSidebar, users, saveMessage, unsaveMessage, currentUserId, savedMessages}) {

  const [editStatus, setEditStatus] = useState(false);
  const [saveStatus, setSaveStatus] = useState("");

  useEffect(() => {
    // debugger
    if (Object.keys(savedMessages).includes(String(message.id))) setSaveStatus(true);
  }, [])
  
  if (!message) return;
  const date = new Date(message.createdAt);
  const currentYear = new Date().getFullYear();
  let dateOptions = {}

  // Don't display year in date if message is in the current year
  if (date.getFullYear() < currentYear) {
    dateOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
  } else {
    dateOptions = { 
      weekday: 'long', 
      month: 'long', 
      day: 'numeric' 
    };
  }

  const timeOptions = {
    hour: 'numeric', 
    minute: 'numeric', 
    hour12: true,
    
  }

  // Add date ordinal
  const nth = (d) =>  {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:  
        return "st";
      case 2:  
        return "nd";
      case 3:  return "rd";
      default: 
        return "th";
    }
  }


  const dayOfMonth = date.getDate();
  const msgDate = date.toLocaleDateString('en-US', dateOptions)
  const prettyDate = [msgDate, nth(dayOfMonth) ].join("")
  const msgTime = new Intl.DateTimeFormat("en-US", timeOptions).format(date);
  
  const handleReply = (e) => {
    console.log("Reply!")
    openRightSidebar({
      type: "Thread",
      message: message
    }) 
  }

  const handleSave = (e) => {
    if (!saveStatus) {
      console.log("Saved!")
      const saveData = {
        userId: currentUserId,
        messageId: message.id
      }
      saveMessage(saveData)
      setSaveStatus(true);
    } else {
      console.log("Unsaved!")
      debugger
      unsaveMessage(savedMessages[message.id])
      setSaveStatus(false);
    }
  }

  if (!sender) return (<div></div>);

  return (
    (!editStatus) ? (
      <div className={`MessageItem__container ${displayDate && "has-date"} ${saveStatus && "saved"}` }>
        {displayDate && 
          <div className="MessageItem__date-container">
            <div className="MessageItem__date">
              {prettyDate}
            </div>
          </div>
        }

        <div className="MessageItem__actions-container">
          <div className="MessageItem__actions">
            <i className="material-icons-outlined">add_reaction</i>
            <i className="material-icons-outlined">push_pin</i>
            { (!message.parentMessageId) && <i onClick={ () => handleReply() } className="material-icons-outlined">comment</i>}
            <i onClick={() => handleSave() } className="material-icons-outlined">bookmark_border</i>
            <i onClick={() => setEditStatus(true) } className="material-icons-outlined">edit</i>
            <i onClick={() => deleteMessageDB(message.id)} className="material-icons-outlined">delete</i>
          </div>
        </div>

        <div className="MessageItem">
          
          <img className="MessageItem__sender-profile-img" src={(sender.profilePictureUrl) ? sender.profilePictureUrl : "https://templesinaidc.org/wp-content/uploads/sites/57/2019/12/gray-square.jpg"} />
          <ul>
            <div className="MessageItem__info">
              <li className="MessageItem__sender-name">{(sender.displayName) ? sender.displayName : sender.email }</li>
              <li className="MessageItem__time">{msgTime}</li>
            </div>
            <li className="MessageItem__body">
              {message.body}
              {(message.createdAt !== message.updatedAt) && <span className="MessageItem__edited" >(edited)</span> }
            </li>
            
          {/* </ul> */}
        {/* </div> */}

          {(message.replyCount > 0) && 
            <div className="MessageItem__reply-info-container"  onClick={ handleReply } >
              <div className="MessageItem__reply-info" >
                {message.userRepliesIds.map((userId) => {
                  // debugger
                  return (
                    <img key={userId} src={
                      (users[userId].profilePictureUrl) ? 
                        users[userId].profilePictureUrl : 
                        "https://templesinaidc.org/wp-content/uploads/sites/57/2019/12/gray-square.jpg"}  
                      alt="User profile picture" 
                    />
                    )
                })}
                <div className="MessageItem__reply-count">{message.replyCount} {(message.replyCount === 1) ? "reply" : "replies" } </div>
              </div>
              <span class="material-icons-outlined">chevron_right</span>
            </div>
            }

          </ul>
        </div>
      </div>
    ) : (
      <EditMessageForm message={message} patchMessageDB={patchMessageDB} setEditStatus={setEditStatus} />
    )
  )
}

export default MessageItem;