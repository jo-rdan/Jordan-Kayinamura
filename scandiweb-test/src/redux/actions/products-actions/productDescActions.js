import { ADD_TO_CART } from "../index";

export const addToCart = (product) => (dispatch) => {
  console.log("here", product);
  return dispatch({ type: ADD_TO_CART, payload: product });
};
