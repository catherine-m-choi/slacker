import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import messagesReducer from "./messages_reducer";
import conversationsReducer from "./conversations_reducer";
import channelsReducer from "./channels_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  messages: messagesReducer,
  conversations: conversationsReducer,
  channels: channelsReducer,
});

export default entitiesReducer;