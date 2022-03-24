import { combineReducers } from "redux";
import themeReducer from "./theme_reducer";
import modalReducer from "./modal_reducer";

const uiReducer = combineReducers({
  theme: themeReducer,
  modal: modalReducer,
});

export default uiReducer;