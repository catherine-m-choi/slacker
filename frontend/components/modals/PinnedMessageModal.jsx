import React from "react";
import { beautifyDate, beautifyTime } from "../../util/date_util";

function PinnedMessages({pinnedMessages, pinnedMessagesId, filteredUsers, patchMessageDB, updatePinnedMessages}) {

  // debugger

  const handleUnpin = (msg) => {
    const updatedMessage = Object.assign({}, msg);
    updatedMessage.pinned = false;
    updatedMessage.pinner_id = null;
    patchMessageDB(updatedMessage)
    .then( (res) => { 
      const updatedPinMsg = [...pinnedMessagesId]
      const index = updatedPinMsg.indexOf(msg.id);
      if (index > -1) {
        updatedPinMsg.splice(index, 1); // 2nd parameter means remove one item only
      }
      console.log(updatedPinMsg) ;
      // debugger

      updatePinnedMessages(msg.messageableId, updatedPinMsg)

    }
    );
  }

  // debugger
  return (
    <div>
      <ul>
        {pinnedMessages.map( (msg) => {
          if (msg) {

            return (
              <div className="MessageItemCard__container" key={msg.id}>
              <div className="MessageItemCard">
                <ul className="MessageItemCard__content">
                  <div className="MessageItemCard__info">
                    <img onClick={() => handleProfile() } className="MessageItemCard__sender-profile-img" src={filteredUsers[msg.userId].profilePictureUrl} />
                    <li onClick={() => handleProfile() } className="MessageItemCard__sender-name">{filteredUsers[msg.userId].displayName}</li>
                  </div>
                  <li className="MessageItemCard__body">{msg.body}</li>
                  <li className="MessageItemCard__date">{`${beautifyDate(msg.createdAt)} at ${beautifyTime(msg.createdAt)}`}</li>
                  <span onClick={() => handleUnpin(msg) } className="material-icons-outlined">close</span>
                </ul>
              </div>
          </div>
          )
        }
        })}
      </ul>
    </div>
  )
}

export default PinnedMessages;