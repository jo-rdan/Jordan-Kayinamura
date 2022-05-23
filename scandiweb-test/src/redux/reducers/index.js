import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import currencySwitcherReducer from "./currency-switcher/currencySwitcherReducer";
import productsReducer from "./products-reducers/productsReducer";

export default combineReducers({
  currencySwitcher: currencySwitcherReducer,
  categoryToFilter: productsReducer,
  cartItems: cartReducer,
});
