import { CHANGE_CURRENCY_SYMBOL } from "../index";

export const changeCurrencySymbol = (symbol) => (dispatch) => {
  return dispatch({ type: CHANGE_CURRENCY_SYMBOL, payload: symbol });
};
