import { combineReducers } from "redux";
import currencySwitcherReducer from "./currency-switcher/currencySwitcherReducer";
import textReducer from "./redux-setup/setupReducer";

export default combineReducers({
  texts: textReducer,
  currencySwitcher: currencySwitcherReducer,
});
