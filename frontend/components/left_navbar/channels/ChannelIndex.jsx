import React, { useEffect, useState } from "react";
import ChannelIndexItem from "./ChannelIndexItem";

function ChannelIndex(props) {

  const [showItems, setShowItems] = useState(true);
  
  useEffect(() => {
    props.fetchChannels()
  }, [])
  
  return (
    <div className="ConversationIndex">
      <div className="AppLeftBar__section-header">
        <div className="AppLeftBar__section-header-dropdown">
        {(showItems
          ) ? ( 
          <span className="material-icons-outlined" onClick={() => setShowItems(!showItems)} >arrow_drop_down</span>
          ) : (
          <span className="material-icons-outlined" onClick={() => setShowItems(!showItems)} >arrow_right</span>
        )}
        </div>
        <div className="AppLeftBar__section-header-name">
          <div  onClick={() => setShowItems(!showItems)} >Channels</div>
          <div onClick={() => props.openModal("channel/addChannel")} >
            <span className="material-icons-outlined">add</span>
          </div>
        </div>
      </div>

      {(showItems) && ( 
        <ul className="ConversationIndexItems__container">
          {Object.values(props.channels).map((channel) => {
            return (
              <ChannelIndexItem key={channel.id} channel={channel} fetchChannels={props.fetchChannels} users={props.users} currentUserId={props.currentUserId} />
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default ChannelIndex;