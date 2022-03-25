import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import ChatRoomContainer from "./messages/ChatRoomContainer";
import ChatRoomInfoContainer from "./messages/ChatRoomInfoContainer";
import MessageFormContainer from "./messages/MessageFormContainer";
import Modal from './modals/modal'
import AllDMsContainer from "./messages/AllDMsContainer";
import DraftMessage from "./messages/DraftMessage";

// temp for placeholder styling
import AppLeftBar from "./temp_app_bars/AppLeftBar";
import AppRightBar from "./temp_app_bars/AppRightBar";
import AppTopNav from "./temp_app_bars/AppTopNav";

function App(props) { 

  useEffect(() => {
    props.fetchUsers();
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

          <Route path="/app/drafts">
            <DraftMessage />
            {/* <MessageFormContainer /> */}
          </Route>
          
          <Route path="/app/all-dms" component={AllDMsContainer} />
        
        </div>
        <AppRightBar />
      </div>
    </div>
  )
};

// export default App;

import { connect } from "react-redux";
import { fetchUsers } from "../actions/user_actions";

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers())
  }
}

export default connect(null, mapDispatchToProps)(App)