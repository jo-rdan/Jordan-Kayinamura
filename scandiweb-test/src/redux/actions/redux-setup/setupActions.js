import { CHANGE_TEXT, LOAD_TEXT } from "../index";

export const loadText = () => (dispatch) => {
  return dispatch({ type: LOAD_TEXT });
};

export const changeText = (newText) => (dispatch) => {
  return dispatch({ type: CHANGE_TEXT, payload: newText });
};
