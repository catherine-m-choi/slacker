import { 
  FETCH_CHANNELS, 
  ADD_CHANNEL, 
  UPDATE_CHANNEL, 
  DELETE_CHANNEL, 
  ADD_MEMBER, 
  REMOVE_MEMBER,
  UPDATE_RECENT_MESSAGE,
  UPDATE_PINNED_MESSAGES
} from "../actions/channel_actions";

const channelsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case FETCH_CHANNELS:
      return action.payload
    case ADD_CHANNEL:
      nextState = Object.assign({}, state);
      nextState[action.payload.id] = action.payload;
      return nextState;
    case UPDATE_CHANNEL:
      nextState = Object.assign({}, state);
      nextState[action.payload.id] = action.payload;
      return nextState;
    case DELETE_CHANNEL:
      nextState = Object.assign({}, state);
      delete nextState[action.payload];
      return nextState;
    case ADD_MEMBER:
      nextState = Object.assign({}, state);
      let channelId = action.payload.channelId
      nextState[channelId].members.push(action.payload.userId)
      return nextState;
    case REMOVE_MEMBER:
      nextState = Object.assign({}, state);
      let deleteId = action.payload.userId
      let arr = nextState[action.payload.channelId].members;
      let idx = arr.indexOf(deleteId)
      if (idx > -1) {
        arr.splice(idx, 1);
      }
      nextState[action.payload.channelId].members = arr;
      return nextState;
    case UPDATE_RECENT_MESSAGE:
      nextState = Object.assign({}, state);
      nextState[action.payload.channelId].lastMessage = action.payload.messageId;
      return nextState;
    case UPDATE_PINNED_MESSAGES:
      nextState = Object.assign({}, state);
      nextState[action.payload.channelId].pinnedMessages = action.payload.pinnedMessages
      return nextState;
    default:
      return state;
  }
};

export default channelsReducer;