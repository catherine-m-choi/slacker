import React from "react";
import { Route } from "react-router-dom";
import ChatRoomContainer from "./messages/ChatRoomContainer";
import MessageFormContainer from "./messages/MessageFormContainer";

// temp for placeholder styling
import AppLeftBar from "./temp_app_bars/AppLeftBar";
import AppRightBar from "./temp_app_bars/AppRightBar";
import AppTopNav from "./temp_app_bars/AppTopNav";

const App = () => (
  <div className="App">
    <AppTopNav />
    <div className="App__content">
      <AppLeftBar />
      
      <Route path="/app/conversations/:id" >
        <div className="App__center-content">
          <ChatRoomContainer />
            <div className="MessageForm__float">
            </div>
          <MessageFormContainer />
        </div>
      </Route>

      <AppRightBar />
    </div>
  </div>
);

export default App;