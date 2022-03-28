import { ADD_MESSAGE, 
  UPDATE_MESSAGE, 
  DELETE_MESSAGE, 
  FETCH_MESSAGES,
  INCREMENT_REPLY_COUNT,
} from "../actions/message_actions";

const messagesReducer = (state = {}, action) => {
  // debugger
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case ADD_MESSAGE:
      // debugger
      nextState = Object.assign({}, state);
      nextState[action.payload.id] = action.payload;
      return nextState;
    case UPDATE_MESSAGE:
      nextState = Object.assign({}, state);
      nextState[action.payload.id] = action.payload;
      return nextState;
    case DELETE_MESSAGE:
      nextState = Object.assign({}, state);
      delete nextState[action.payload];
      return nextState;
    case FETCH_MESSAGES:
      return action.payload
    case INCREMENT_REPLY_COUNT:
      nextState = Object.assign({}, state);
      nextState[action.payload] = {
        ...nextState[action.payload], 
        replyCount: nextState[action.payload].replyCount + 1
      }
      debugger
      return nextState;
    default:
      return state;
  }
};

export default messagesReducer;