import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/Root";

// start testing
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
    // delete window.currentUser;
  } else {
    store = configureStore();
  }

  // const store = configureStore();
  ReactDOM.render(<Root store={store} />, root);

  // start testing
  window.getState = store.getState;
  window.dispatch = store.dispatch; 
  // end testing
});