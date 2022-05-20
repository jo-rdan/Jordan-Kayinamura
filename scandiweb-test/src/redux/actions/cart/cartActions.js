import {
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_FROM_CART,
  NEXT_IMAGE,
  PREV_IMAGE,
  OPEN_CART,
} from "../index";

export const changeQuantity = (operation, itemId) => (dispatch) => {
  return dispatch({
    type: operation === "+" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
    payload: itemId,
  });
};

export const prevImage = (data) => (dispatch) => {
  return dispatch({
    type: PREV_IMAGE,
    payload: data,
  });
};

export const nextImage = (data) => (dispatch) => {
  return dispatch({
    type: NEXT_IMAGE,
    payload: data,
  });
};

export const removeProduct = (currentItem) => (dispatch) => {
  return dispatch({ type: REMOVE_FROM_CART, payload: currentItem });
};

export const openCart = () => (dispatch) => dispatch({ type: OPEN_CART });
