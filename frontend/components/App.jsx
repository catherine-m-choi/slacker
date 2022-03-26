import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import ChatRoomContainer from "./messages/ChatRoomContainer";
import ChatRoomInfoContainer from "./messages/ChatRoomInfoContainer";
import MessageFormContainer from "./messages/MessageFormContainer";
import Modal from './modals/modal'
import AllDMsContainer from "./messages/AllDMsContainer";
import DraftMessage from "./messages/DraftMessage";
import RightSidebar from "./right_sidebar/RightSidebar";

// temp for placeholder styling
import AppLeftBar from "./temp_app_bars/AppLeftBar";
// import AppRightBar from "./temp_app_bars/AppRightBar";
import AppTopNav from "./temp_app_bars/AppTopNav";

function App(props) { 

  useEffect(() => {
    props.fetchUsers()

    props.fetchMessagesDB()
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
            <button onClick={() => props.openRightSidebar({
              type: "Thread",
              message: {
                id: 303,
                body: "drfhdfh",
                userId: 44,
                messageableId: 69,
                messageableType: "Conversation",
                parentMessageId: null,
                createdAt: "2022-03-25T04:33:13.009Z",
                updatedAt: "2022-03-25T04:33:13.009Z",
              }
            })} >Temp placeholder to test sidebar</button>
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
        <RightSidebar />
        
      </div>
    </div>
  )
};

// export default App;

import { connect } from "react-redux";
import { fetchUsers } from "../actions/user_actions";
import { openRightSidebar } from "../actions/right_sidebar_actions";
import { fetchMessagesDB } from "../actions/message_actions";

const mapDispatchToProps = dispatch => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    fetchMessagesDB: () => dispatch(fetchMessagesDB()),
    fetchConvos: () => dispatch(fetchConvos()),
    openRightSidebar: (sidebarInfo) => dispatch(openRightSidebar(sidebarInfo)),
  }
}

export default connect(null, mapDispatchToProps)(App)