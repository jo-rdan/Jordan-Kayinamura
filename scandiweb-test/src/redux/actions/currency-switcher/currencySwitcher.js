import { CHANGE_CURRENCY_SYMBOL } from "../index";

export const changeCurrencySymbol = (symbol) => (dispatch) => {
  console.log("====================================");
  console.log();
  console.log("====================================");
  return dispatch({ type: CHANGE_CURRENCY_SYMBOL, payload: symbol });
};
