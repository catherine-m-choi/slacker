import React, { useState } from "react";
import { Link } from "react-router-dom";

function MainSearchBar(props) {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useState("")

  let displayChat = "";
  if (props.chatType === "Channel") {
    displayChat = <div className="MainSearchBar__chat-search">Find in #{props.currentChat.name}</div>
  } else if (props.chatType === "Conversation") {
    let memberNames = props.currentChat.members
    let members = [];
    memberNames.forEach(userId => {
      if (userId !== props.currentUserId) {
        members.push(props.users[userId].displayName)
      }
    });
    // debugger
    const slicedNames = members.slice(0, members.length - 1)
    const prettyNames = slicedNames.join(", ") + ((members.length > 2) ? "," : "") + ` and ${members[members.length - 1]}`
    displayChat = <div className="MainSearchBar__chat-search">Find in direct messages with {prettyNames}</div>
  }

  const handleProfile = (user) => {
    props.openRightSidebar({
      type: "Profile",
      user: user
    }) 
  }

  const onKeyDown = (e) => {
    if (!(["", "@", "#"].includes(searchQuery)) && e.keyCode === 13) {
      props.history.push(`/app/search`);
      props.setShowSearch(false);
    } else if (searchQuery === "" && e.keyCode === 8) {
      setSearchParams("")
    }
  }

  let searchResults;
  if (searchParams === "people" || searchQuery[0] === "@" ) {
    let newQuery = searchQuery;
    if (searchQuery[0] === "@") {
      newQuery = searchQuery.slice(1)
    }
    const filteredUsers = Object.values(props.users).filter((user) => {
      if (newQuery === '') {
        return;
      } else if (props.currentUserId === user.id) {
        return;
      } else {
        return user.displayName.toLowerCase().includes(newQuery.toLowerCase())
      }
    })
    searchResults = 
      <ul className="MainSearchBar__searchResults">
        {filteredUsers.map((user) => (
          <li key={user.id} onClick={() => {
            handleProfile(user);
            props.setShowSearch(false);
            }} 
            className="MainSearchBar__searchResults-users"
          >
              <img src={user.profilePictureUrl} />
              <div>{user.displayName}</div>
          </li>
        ))}
      </ul>
  } else if (searchParams === "channels" || searchQuery[0] === "#") {
    let newQuery = searchQuery;
    if (searchQuery[0] === "#") {
      newQuery = searchQuery.slice(1)
    }
    const filteredChannels = Object.values(props.channels).filter((channel) => {
      if (newQuery === '') {
        return;
      } else if (props.currentChat && props.currentChat.id === channel.id) {
        return;
      } else {
        return channel.name.toLowerCase().includes(newQuery.toLowerCase())
      }
    })
    searchResults = 
      <ul className="MainSearchBar__searchResults">
        {filteredChannels.map((channel) => (
          <Link  key={channel.id} to={`/app/channels/${channel.id}`} onClick={ () => props.setShowSearch(false)} >
            <li className="MainSearchBar__searchResults-channels">
              {`#${channel.name}`}
            </li>
          </Link>
        ))}
      </ul>

  } else if (searchParams === "messages") {
    const filteredMessages = Object.values(props.messages).filter((message) => {
      if (searchQuery === '') {
        return;
      } else {
        return message.body.toLowerCase().includes(searchQuery.toLowerCase())
      }
    })
    searchResults = 
      <ul className="MainSearchBar__searchResults">
        {filteredMessages.map((message) => (
          <Link  key={message.id} to={`/app/${message.messageableType.toLowerCase()}/${message.messageableId}`} onClick={ () => props.setShowSearch(false)} >
            <li className="MainSearchBar__searchResults-messages">
              <span className="material-icons-outlined">chat</span>
              <div>{message.body}</div>
            </li>
          </Link>
        ))}
      </ul>
  } else {
    
    // Refactor to DRY up code
    const filteredUsers = Object.values(props.users).filter((user) => {
      if (searchQuery === '') {
        return;
      } else if (props.currentUserId === user.id) {
        return;
      } else {
        return user.displayName.toLowerCase().includes(searchQuery.toLowerCase())
      }
    })

    const filteredChannels = Object.values(props.channels).filter((channel) => {
      if (searchQuery === '') {
        return;
      } else if (props.currentChat && props.currentChat.id === channel.id) {
        return;
      } else {
        return channel.name.toLowerCase().includes(searchQuery.toLowerCase())
      }
    })
    
    const filteredMessages = Object.values(props.messages).filter((message) => {
      if (searchQuery === '') {
        return;
      } else {
        return message.body.toLowerCase().includes(searchQuery.toLowerCase())
      }
    })

    searchResults = 
      <ul className="MainSearchBar__searchResults">
        {filteredUsers.map((user) => (
          <li key={user.id} onClick={() => {
              handleProfile(user); 
              props.setShowSearch(false);
            }}
            className="MainSearchBar__searchResults-users">
            <img src={user.profilePictureUrl} />
            <div>{user.displayName}</div>
          </li>
        ))}
        {filteredChannels.map((channel) => (
          <Link  key={channel.id} to={`/app/channels/${channel.id}`} onClick={ () => props.setShowSearch(false)} >
            <li className="MainSearchBar__searchResults-messages">
              {`#${channel.name}`}
            </li>
          </Link>
        ))}
        {filteredMessages.map((message) => (
          <Link  key={message.id} to={`/app/${message.messageableType.toLowerCase()}s/${message.messageableId}`} onClick={ () => props.setShowSearch(false)} >
            <li className="MainSearchBar__searchResults-messages">
              <span className="material-icons-outlined">chat</span>
              <div>{message.body}</div>
            </li>
          </Link>
        ))
        }
      </ul>
      
  }
  
  return (
    <div className="MainSearchBar">
        
      <div className="MainSearchBar__field">
        {(searchParams !== "") ? (
          <div className="MainSearchBar__btn search-button" >
            <button>{searchParams}</button>
            <span  onClick={() => setSearchParams("")} className="material-icons-outlined">close</span>
          </div>
        ) : (
          <span className="material-icons-outlined">search</span>
        )}
        <input id="DraftMessage__search-input"
          type="text" 
          placeholder="Input search. Beep boop." 
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onFocus={ () => props.setShowSearch(true) }
          onKeyDown={onKeyDown}
          autoComplete="off"
          />
      </div>

      {(searchQuery === "") && 
        <div >

          <div className="MainSearchBar__search-chat">
            <span className="material-icons-outlined">manage_search</span>
            {displayChat}
          </div>

          <div className="MainSearchBar__helper-text" >I'm looking for...</div>


          <div className="MainSearchBar__btns" >
            <div className="MainSearchBar__btn" onClick={() => setSearchParams("messages")} >
              <span className="material-icons-outlined">question_answer</span>
              <button >Messages</button>
            </div>

            <div className="MainSearchBar__btn" onClick={() => setSearchParams("channels")} >
              <span className="material-icons-outlined">feed</span>
              <button  >Channels</button>
            </div>

            <div className="MainSearchBar__btn"  onClick={() => setSearchParams("people")} >
              <span className="material-icons-outlined">groups</span>
              <button>People</button>
            </div>
          </div>
        </div>
      }

      {searchResults}
      
    </div>
  )
}

// export default withRouter(MainSearchBar);

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { openRightSidebar } from "../../actions/right_sidebar_actions";

const mapStateToProps = (state, ownProps) => {
  const pathname = ownProps.location.pathname;
  const arr = pathname.split("/")
  const id = arr[arr.length-1]
  if (ownProps.location.pathname.includes('/app/conversations/')) {
    return {
      chatType: "Conversation",
      currentChat: state.entities.conversations[id],
      users: state.entities.users,
      channels: state.entities.channels,
      conversations: state.entities.conversations,
      messages: state.entities.messages,
      currentUserId: state.session.id,
    }
  } else if (ownProps.location.pathname.includes('/app/channels/')) {
    return {
      chatType: "Channel",
      currentChat: state.entities.channels[id],
      users: state.entities.users,
      channels: state.entities.channels,
      conversations: state.entities.conversations,
      messages: state.entities.messages,
      currentUserId: state.session.id,
    }
  } else {
    return {
      chatType: "",
      users: state.entities.users,
      channels: state.entities.channels,
      conversations: state.entities.conversations,
      messages: state.entities.messages,
      currentUserId: state.session.id,
    }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openRightSidebar: (sidebarInfo) => dispatch(openRightSidebar(sidebarInfo)),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainSearchBar));