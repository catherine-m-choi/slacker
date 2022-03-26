import { combineReducers } from "redux";
import themeReducer from "./theme_reducer";
import modalReducer from "./modal_reducer";
import rightSidebarReducer from "./right_sidebar_reducer";

const uiReducer = combineReducers({
  theme: themeReducer,
  modal: modalReducer,
  rightSidebar:rightSidebarReducer,
});

export default uiReducer;