import { combineReducers } from "redux";
import themeReducer from "./theme_reducer";

const uiReducer = combineReducers({
  theme: themeReducer,
});

export default uiReducer;