import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = (preloadedState = {}) =>
  createStore(
    rootReducer, 
    preloadedState, 
    // composeEnhancers(applyMiddleware(thunk, logger)));
    // switch later for production!!!
    applyMiddleware(thunk, logger));
    // applyMiddleware(thunk));

export default configureStore;