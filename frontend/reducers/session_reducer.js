// import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER} from '../actions/session_actions';
// import { SAVE_MESSAGE, UNSAVE_MESSAGE } from '../actions/message_actions';

// const _nullSession = {
//   id: null,
//   savedMessages: {},
// };

// const sessionReducer = (state=_nullSession, action) => {
//   Object.freeze(state);

//   switch (action.type) {
//     case RECEIVE_CURRENT_USER:
//       const nextState =  Object.assign({}, state);
//       nextState["id"] = action.user.id;
//       debugger
//       nextState["savedMessages"] = action.user.savedMessages;
//       return nextState;
//     case REMOVE_CURRENT_USER:
//       return _nullSession;
//     case SAVE_MESSAGE:
//       nextState =  Object.assign({}, state);
//       debugger
//       nextState.savedMessages[action.payload.id] = { messageId: action.payload.messageId }
//       return nextState;
//     case UNSAVE_MESSAGE:
//     default:
//       return state;
//   }
// };

// export default sessionReducer;


import { combineReducers } from "redux";
import currentUserReducer from "./current_user_reducer";
import savedMessagesReducer from "./saved_messages_reducer";

const sessionReducer = combineReducers({
  id: currentUserReducer,
  savedMessages: savedMessagesReducer,
})


export default sessionReducer;