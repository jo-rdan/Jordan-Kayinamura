import { combineReducers } from "redux";
import textReducer from "./redux-setup/setupReducer";

export default combineReducers({
  texts: textReducer,
});
