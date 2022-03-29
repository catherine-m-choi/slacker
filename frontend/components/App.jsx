import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import ChatRoomContainer from "./messages/ChatRoomContainer";
import ChatRoomInfoContainer from "./messages/ChatRoomInfoContainer";
import MessageFormContainer from "./messages/MessageFormContainer";
import Modal from './modals/modal'
import AllDMsContainer from "./messages/AllDMsContainer";
import DraftMessage from "./messages/DraftMessage";
import RightSidebar from "./right_sidebar/RightSidebar";
import SavedMessagesContainer from "./messages/SavedMessagesContainer";

// temp for placeholder styling
import AppLeftBar from "./temp_app_bars/AppLeftBar";
// import AppRightBar from "./temp_app_bars/AppRightBar";
import AppTopNav from "./temp_app_bars/AppTopNav";

function App(props) { 

  useEffect(() => {
    props.fetchUsers();
    props.fetchMessagesDB();
    props.fetchSavedMessages();
    props.fetchChannels();
    // props.fetchConvos().then(console.log("From App"))
  }, [])

  return (
    <div className="App">
      <Route path="/app/conversations/:id" component={Modal} />
      <AppTopNav />

      <div className="App__content">
        <AppLeftBar />
          
        <div className="App__center-content">
          
          <Route path="/app/conversations/:id" >
            <ChatRoomInfoContainer />
            <ChatRoomContainer />
            <div className="MessageForm__float"></div>
            <MessageFormContainer />
          </Route>
          
          <Route path="/app/channels/:id" >
            <ChatRoomInfoContainer />
            <ChatRoomContainer />
            <div className="MessageForm__float"></div>
            <MessageFormContainer />
          </Route>

          <Route path="/app/drafts">
            <DraftMessage />
          </Route>
          
          <Route path="/app/all-dms" component={AllDMsContainer} />
          <Route path="/app/saved-page" component={SavedMessagesContainer} />
        
        </div>
        <RightSidebar />
        
      </div>
    </div>
  )
};

// export default App;

import { connect } from "react-redux";
import { fetchUsers } from "../actions/user_actions";
// import { openRightSidebar } from "../actions/right_sidebar_actions";
import { fetchMessagesDB, fetchSavedMessages } from "../actions/message_actions";
import { fetchChannels } from "../actions/channel_actions";

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchMessagesDB: () => dispatch(fetchMessagesDB()),
    fetchConvos: () => dispatch(fetchConvos()),
    fetchChannels: () => dispatch(fetchChannels()),
    fetchSavedMessages: () => dispatch(fetchSavedMessages()),
    // openRightSidebar: (sidebarInfo) => dispatch(openRightSidebar(sidebarInfo)),
  }
}

export default connect(null, mapDispatchToProps)(App)