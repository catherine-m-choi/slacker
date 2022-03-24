import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/Root";

// start testing
import { fetchConvos, addConvo, updateConvo, deleteConvo, addMember } from "./actions/conversation_actions"
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

  window.fetchConvos = fetchConvos;
  window.addConvo = addConvo;
  window.updateConvo = updateConvo;
  window.deleteConvo = deleteConvo;
  window.addMember = addMember;
  // end testing
});