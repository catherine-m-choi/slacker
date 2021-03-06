import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_USERS, UPDATE_USER } from '../actions/user_actions';

const usersReducer = (state={}, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      nextState =  Object.assign({}, state);
      nextState[action.user.id] = action.user;
      return nextState;
    case UPDATE_USER:
      nextState =  Object.assign({}, state);
      nextState[action.payload.id] = action.payload;
      return nextState;
    case RECEIVE_ALL_USERS:
      return action.payload
    default:
      return state;
  }
};

export default usersReducer;