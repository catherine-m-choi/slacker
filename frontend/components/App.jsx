import React from "react";
import TempChatRoomContainer from "./messages/TempChatRoomContainer";
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
      
      <div className="App__center-content">
        <TempChatRoomContainer />
        <div className="MessageForm__float"></div>
        <MessageFormContainer />
      </div>

      <AppRightBar />
    </div>
  </div>
);

export default App;