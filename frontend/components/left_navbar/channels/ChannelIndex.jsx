import React, { useEffect, useState } from "react";
import ChannelIndexItem from "./ChannelIndexItem";

function ChannelIndex(props) {
  
  useEffect(() => {
    props.fetchChannels()
  }, [])
  
  return (
    <div className="ConversationIndex">
      <div className="AppLeftBar__section-header">
        <div className="AppLeftBar__section-header-dropdown">
          <span className="material-icons-outlined">arrow_drop_down</span>
        </div>
        <div className="AppLeftBar__section-header-name">
          <div>Channels</div>
          <div onClick={() => props.openModal("channel/addChannel")} >
            <span className="material-icons-outlined">add</span>
          </div>
        </div>
      </div>

      <ul className="ConversationIndexItems__container">
        {Object.values(props.channels).map((channel) => {
          return (
            <ChannelIndexItem key={channel.id} channel={channel} fetchChannels={props.fetchChannels} users={props.users} currentUserId={props.currentUserId} />
          )
        })}
      </ul>
    </div>
  )
}

export default ChannelIndex;