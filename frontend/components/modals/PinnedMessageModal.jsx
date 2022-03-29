import React from "react";
import { beautifyDate, beautifyTime } from "../../util/date_util";

function PinnedMessages({pinnedMessages, filteredUsers}) {
  
  return (
    <div>
      Pinned Messages here
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
                  <li>{msg.body}</li>
                  <li>{`${beautifyDate(msg.createdAt)} at ${beautifyTime(msg.createdAt)}`}</li>
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