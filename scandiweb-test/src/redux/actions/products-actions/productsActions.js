import { FILTER_CATEGORY } from "../index";

export const getProductsByCategory = (category) => (dispatch) => {
  return dispatch({ type: FILTER_CATEGORY, payload: category });
};
