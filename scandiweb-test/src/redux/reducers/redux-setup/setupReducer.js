import { CHANGE_TEXT, LOAD_TEXT } from "../../actions";

const iState = {
  text: "",
};

const textReducer = (state = iState, action) => {
  switch (action.type) {
    case LOAD_TEXT:
      return {
        ...state,
        text: "Default",
      };

    case CHANGE_TEXT:
      return {
        ...state,
        text: action.payload,
      };
    default:
      return state;
  }
};

export default textReducer;
