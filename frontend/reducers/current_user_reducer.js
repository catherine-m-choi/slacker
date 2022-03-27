import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER} from '../actions/session_actions';
import { SAVE_MESSAGE, UNSAVE_MESSAGE } from '../actions/message_actions';

// const _nullSession = {
//   id: null,
//   savedMessages: {},
// };

const currentUserReducer = (state=null, action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return action.user.id;;
    case REMOVE_CURRENT_USER:
      return null;
    default:
      return state;
  }
};

export default currentUserReducer;