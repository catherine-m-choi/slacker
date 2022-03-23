import { ADD_MESSAGE, UPDATE_MESSAGE, DELETE_MESSAGE, FETCH_MESSAGES } from "../actions/message_actions";

const messagesReducer = (state = {}, action) => {
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
    default:
      return state;
  }
};

export default messagesReducer;