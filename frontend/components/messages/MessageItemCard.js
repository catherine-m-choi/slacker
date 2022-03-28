import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function MessageItemCard({message, sender, users, currentUserId}) {
  
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