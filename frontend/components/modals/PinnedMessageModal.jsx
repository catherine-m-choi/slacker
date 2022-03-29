import React from "react";
import { beautifyDate, beautifyTime } from "../../util/date_util";

function PinnedMessages({pinnedMessages, filteredUsers, patchMessageDB}) {


  const handlePin = (msg) => {
    const updatedMessage = Object.assign({}, msg);
    updatedMessage.pinned = false;
    updatedMessage.pinner_id = null;
    patchMessageDB(updatedMessage);
  }
  
  return (
    <div>
      <ul>
        {pinnedMessages.map( (msg) => {
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
                  <span onClick={() => handlePin(msg) } className="material-icons-outlined">close</span>
                </ul>
              </div>
          </div>
          )
        })}
      </ul>
    </div>
  )
}

export default PinnedMessages;