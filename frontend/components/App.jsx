import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import ChatRoomContainer from "./messages/ChatRoomContainer";
import ChatRoomInfoContainer from "./messages/ChatRoomInfoContainer";
import MessageFormContainer from "./messages/MessageFormContainer";
import Modal from './modals/modal'
import AllDMsContainer from "./messages/AllDMsContainer";
import DraftMessage from "./messages/DraftMessage";
import RightSidebar from "./right_sidebar/RightSidebar";
import SavedMessagesContainer from "./messages/SavedMessagesContainer";

// temp for placeholder styling
import AppLeftBar from "./left_navbar/AppLeftBar";
// import AppRightBar from "./nav_bars/AppRightBar";
import AppTopNav from "./top_navbar/AppTopNav";
import NoMatch from "./messages/NoMatch";

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
      <Switch>
        <Route path="/app/conversations/:id" component={Modal} />
        <Route path="/app/channels/:id" component={Modal} />
        <Route path="/app/" component={Modal} />
      </Switch>

      <AppTopNav />
      <div className="App__content">
        <AppLeftBar />
          
        <div className="App__center-content">

          <Switch>
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
            <Route exact path="/app/drafts" component={DraftMessage} />
            <Route exact path="/app/all-dms" component={AllDMsContainer} />
            <Route exact path="/app/saved-page" component={SavedMessagesContainer} />
            <Route path="/app/*" component={NoMatch} />
          </Switch>
        
        </div>

        <Route path="/app" component={RightSidebar} />

        
      </div>
    </div>
  )
};

import { connect } from "react-redux";
import { fetchUsers } from "../actions/user_actions";
import { fetchMessagesDB, fetchSavedMessages } from "../actions/message_actions";
import { fetchChannels } from "../actions/channel_actions";

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchMessagesDB: () => dispatch(fetchMessagesDB()),
    fetchConvos: () => dispatch(fetchConvos()),
    fetchChannels: () => dispatch(fetchChannels()),
    fetchSavedMessages: () => dispatch(fetchSavedMessages()),
  }
}

export default connect(null, mapDispatchToProps)(App)