import React from "react";
import { Link } from "react-router-dom";
import { beautifyDate, beautifyTime } from "../../util/date_util";

function MessageItemCard({message, sender, users, currentUserId}) {
  
  if (!message) return;
  
  const prettyDate = beautifyDate(message.createdAt)
  const msgTime = beautifyTime(message.createdAt)

  const handleProfile = (e) => {
    console.log("Opening profile!")
    openRightSidebar({
      type: "Profile",
      user: sender
    }) 
  }

  if (!sender) return (<div></div>);

  return (
    <div className="MessageItemCard__container">
      
      <div className="MessageItemCard__date">
        {prettyDate}
      </div>

      <Link to={`/app/conversations/${message.messageableId}`} >
        <div className="MessageItemCard">
          
            <img onClick={() => handleProfile() } className="MessageItemCard__sender-profile-img" src={(sender.profilePictureUrl) ? sender.profilePictureUrl : "https://templesinaidc.org/wp-content/uploads/sites/57/2019/12/gray-square.jpg"} />
            
            <ul className="MessageItemCard__content">
              <div className="MessageItemCard__info">
                <li onClick={() => handleProfile() } className="MessageItemCard__sender-name">{(sender.displayName) ? sender.displayName : sender.email }</li>
                <li className="MessageItemCard__time">{msgTime}</li>
              </div>
              <li className="MessageItemCard__body">
                {message.body}
              </li>
            </ul>
            
        </div>
      </Link>
    </div>
  )
}

export default MessageItemCard;