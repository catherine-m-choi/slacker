import React, { useEffect, useState } from "react";
import EditMessageForm from "./EditMessageForm";
// import ProfileCard from "../modals/ProfileCard";
import { beautifyDate, beautifyTime } from "../../util/date_util";
import { Gif } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'

function MessageItem({
  message, 
  sender, 
  displayDate, 
  deleteMessageDB, 
  patchMessageDB, 
  openRightSidebar, 
  users, 
  saveMessage, 
  unsaveMessage, 
  currentUserId, 
  savedMessages, 
  replyCount,
  pinnedMessagesId,
  updatePinnedMessages, 
  openModal}) {

  const [editStatus, setEditStatus] = useState(false);
  const [saveStatus, setSaveStatus] = useState("");
  const [pinStatus, setPinnedStatus] = useState(message.pinned);
  const [gif, setGif] = useState("");

  useEffect(() => {
    let mounted = true
    if (mounted) setPinnedStatus(message.pinned)
    return (
      mounted = false
    )
  }, [message])

  useEffect(() => {
    if (Object.keys(savedMessages).includes(String(message.id))) setSaveStatus(true);
  }, [])
  
  if (!message) return;

  const prettyDate = beautifyDate(message.createdAt)
  const msgTime = beautifyTime(message.createdAt)
  
  const handleReply = (e) => {
    openRightSidebar({
      type: "Thread",
      message: message
    }) 
  }

  const handleSave = (e) => {
    if (!saveStatus) {
      const saveData = {
        userId: currentUserId,
        messageId: message.id
      }
      saveMessage(saveData)
      setSaveStatus(true);
    } else {
      unsaveMessage(savedMessages[message.id])
      setSaveStatus(false);
    }
  }

  const handlePin = (e) => {
    let mounted = true
    const updatedMessage = Object.assign({}, message);
    if (mounted) {
      if (!pinStatus) {
        updatedMessage.pinned = true;
        updatedMessage.pinner_id = currentUserId;
        setPinnedStatus(true);
        patchMessageDB(updatedMessage)
        .then( (res) => { 
          const updatedPinMsgs = [...pinnedMessagesId]
          updatedPinMsgs.push(res.payload.id)
          
          updatePinnedMessages(message.messageableId, updatedPinMsgs)
          
        })
      } else {
        updatedMessage.pinned = false;
        updatedMessage.pinner_id = null;
        setPinnedStatus(false);
        patchMessageDB(updatedMessage)
        .then( (res) => { 
          const updatedPinMsgs = [...pinnedMessagesId]
          const index = updatedPinMsgs.indexOf(message.id);
          if (index > -1) {
            updatedPinMsgs.splice(index, 1); // 2nd parameter means remove one item only
          }
          updatePinnedMessages(message.messageableId, updatedPinMsgs)
        })
      }
    }

    return (
      mounted = false
    )
  }
    
  const handleProfile = (e) => {
    openRightSidebar({
      type: "Profile",
      user: sender
    }) 
    // openModal("convo/profileCard")
  }

  if (!sender) return (<div></div>);

  let savedPinnedMessage;
  if (saveStatus && pinStatus && message.pinnerId) {
    savedPinnedMessage = 
      <div className="MessageItem__pinned-message">
        <i className="material-icons">push_pin</i>
        <div>Pinned by {(message.pinnerId === currentUserId) ? "you" : users[message.pinnerId].displayName }   &#183;   Saved</div>
      </div>
  } else if (saveStatus) {
    savedPinnedMessage = 
      <div className="MessageItem__saved-message">
        <i className="material-icons-outlined">bookmark</i>
        <div>Added to your saved items</div>
      </div>
  } else if (pinStatus && message.pinnerId) {
    savedPinnedMessage = 
      <div className="MessageItem__pinned-message">
        <i className="material-icons">push_pin</i>
        <div>Pinned by {(message.pinnerId === currentUserId) ? "you" : users[message.pinnerId].displayName }</div>
      </div>
  }

    useEffect(() => {
      const gf = new GiphyFetch('06IBHnG3CezngfNeqVPVMjggyqL1FLpJ')
      const fetchGif = async () => {
        if (message.giphy && message.body) {
          const { data } = await gf.gif(message.body)
          setGif(data);
        }
      }
      fetchGif();
  }, [message]);
  
  return (
      // (!editStatus) ? (
        <div className={`MessageItem__container ${displayDate ? "has-date" : "no-date" } ${ savedPinnedMessage ? "saved" : "not-saved"}` }>
          
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
              <i onClick={() => handlePin() } className={`material-icons${ pinStatus ? " pinned" : "-outlined not-pinned"}`} >push_pin</i>
              { (!message.parentMessageId) && <i onClick={ () => handleReply() } className="material-icons-outlined">comment</i>}
              <i onClick={() => handleSave() } className={`material-icons-outlined ${ saveStatus ? "saved" : "not-saved"}`}>{ saveStatus ? "bookmark" : "bookmark_border"}</i>
              {(message.giphy || (currentUserId != message.userId)) ? null : 
                <i onClick={() => setEditStatus(true) } className="material-icons-outlined">edit</i>
              }
              {(currentUserId != message.userId) ? null : 
                <i onClick={() => deleteMessageDB(message.id)} className="material-icons-outlined">delete</i>
              }
            </div>
          </div>

          <div className="MessageItem">

            {savedPinnedMessage}
            
            <div className="MessageItem__content">
              <img onClick={() => handleProfile() } className="MessageItem__sender-profile-img" src={(sender.profilePictureUrl) ? sender.profilePictureUrl : "https://templesinaidc.org/wp-content/uploads/sites/57/2019/12/gray-square.jpg"} />
              {/* {(!editStatus) ? ( */}
              
                <ul>
                  <div className="MessageItem__info">
                    <li onClick={() => handleProfile() } className="MessageItem__sender-name">{(sender.displayName) ? sender.displayName : sender.email }</li>
                    <li className="MessageItem__time">{msgTime}</li>
                  </div>
                  {(message.giphy) ? (
                    <div>
                      {gif && 
                        <Gif 
                          gif={gif} 
                          width={300} 
                          height={300} 
                          hideAttribution={true} 
                          noLink={true} 
                        />
                      }
                    </div>
                  ) : (
                    (!editStatus) ? (
                    <li className="MessageItem__body">
                      {message.body}
                      {(message.createdAt !== message.updatedAt) && <span className="MessageItem__edited" >(edited)</span> }
                    </li>
                    ) : (
                      <div className="EditMessageForm" >
                        <div className={`MessageItem__container ${ savedPinnedMessage ? "saved" : "not-saved"}` }>
                          <EditMessageForm message={message} patchMessageDB={patchMessageDB} setEditStatus={setEditStatus} />
                        </div>
                      </div>
                    )
                  )}
                  
                {(replyCount > 0) && 
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
                      <div className="MessageItem__reply-count">{replyCount} {(replyCount === 1) ? "reply" : "replies" } </div>
                    </div>
                    <span className="material-icons-outlined">chevron_right</span>
                  </div>
                  }

                </ul> 
            </div>
          </div>
        </div>
  )
}

export default MessageItem;