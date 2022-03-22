import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/Root";

// start testing
import {createMessage, patchMessage, deleteMessage, fetchMessages} from "./actions/message_actions"
import { fetchUsers } from "./actions/user_actions"
// end testing

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={store} />, root);

  // start testing
  window.getState = store.getState;
  window.dispatch = store.dispatch; 
  window.createMessage = createMessage; 
  window.patchMessage = patchMessage; 
  window.deleteMessage = deleteMessage; 
  window.fetchMessages = fetchMessages; 
  window.fetchUsers = fetchUsers; 
  // end testing
});