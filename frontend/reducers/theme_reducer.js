import { CHANGE_THEME } from "../actions/theme_actions";

const themeReducer = (state = "Monument", action) => {
  switch (action.type) {
    case CHANGE_THEME:
      return action.payload;
    default:
      return state;
  }
};

export default themeReducer;