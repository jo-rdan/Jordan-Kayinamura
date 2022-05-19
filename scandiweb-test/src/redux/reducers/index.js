import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import currencySwitcherReducer from "./currency-switcher/currencySwitcherReducer";
import productsReducer from "./products-reducers/productsReducer";
import textReducer from "./redux-setup/setupReducer";

export default combineReducers({
  texts: textReducer,
  currencySwitcher: currencySwitcherReducer,
  categoryToFilter: productsReducer,
  cartItems: cartReducer,
});
