import { SAVE_MESSAGE, UNSAVE_MESSAGE, FETCH_SAVED_MESSAGES } from '../actions/message_actions';

// const _nullSession = {
//   id: null,
//   savedMessages: {},
// };

const savedMessagesReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case SAVE_MESSAGE:
      nextState =  Object.assign({}, state);
      nextState[action.payload.id] = action.payload.messageId;
      return nextState;
    case UNSAVE_MESSAGE:
      nextState =  Object.assign({}, state);
      delete nextState[action.payload];
      return nextState;
    case FETCH_SAVED_MESSAGES:
      return action.payload
    default:
      return state;
  }
};

export default savedMessagesReducer;