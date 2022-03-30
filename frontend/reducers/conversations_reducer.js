import { 
  FETCH_CONVOS, 
  ADD_CONVO, 
  UPDATE_CONVO, 
  DELETE_CONVO, 
  ADD_MEMBER, 
  UPDATE_RECENT_MESSAGE,
  UPDATE_PINNED_MESSAGES,
  REMOVE_MEMBER
} from "../actions/conversation_actions";

const conversationsReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case FETCH_CONVOS:
      return action.payload
    case ADD_CONVO:
      nextState = Object.assign({}, state);
      nextState[action.payload.id] = action.payload;
      return nextState;
    case UPDATE_CONVO:
      nextState = Object.assign({}, state);
      nextState[action.payload.id] = action.payload;
      return nextState;
    case DELETE_CONVO:
      nextState = Object.assign({}, state);
      delete nextState[action.payload];
      return nextState;
    case ADD_MEMBER:
      nextState = Object.assign({}, state);
      let convoId = action.payload.conversationId
      nextState[convoId].members.push(action.payload.userId)
      return nextState;
    case REMOVE_MEMBER:
      nextState = Object.assign({}, state);
      let deleteId = action.payload.userId
      let arr = nextState[action.payload.conversationId].members;
      let idx = arr.indexOf(deleteId)
      if (idx > -1) {
        arr.splice(idx, 1);
      }
      nextState[action.payload.conversationId].members = arr;
      return nextState;
    case UPDATE_RECENT_MESSAGE:
      nextState = Object.assign({}, state);
      nextState[action.payload.convoId].lastMessage = action.payload.messageId;
      return nextState;
    case UPDATE_PINNED_MESSAGES:
      nextState = Object.assign({}, state);
      nextState[action.payload.convoId].pinnedMessages = action.payload.pinnedMessages
      return nextState;
    default:
      return state;
  }
};

export default conversationsReducer;