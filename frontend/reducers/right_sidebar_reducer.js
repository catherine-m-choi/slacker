import { OPEN_RIGHT_SIDEBAR, CLOSE_RIGHT_SIDEBAR } from '../actions/right_sidebar_actions';

const rightSidebarReducer = (state = null, action) => {
  switch (action.type) {
    case OPEN_RIGHT_SIDEBAR:
      return action.sidebarInfo;
    case CLOSE_RIGHT_SIDEBAR:
      return null;
    default:
      return state;
  }
}

export default rightSidebarReducer;