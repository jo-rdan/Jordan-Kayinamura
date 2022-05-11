import { FILTER_CATEGORY } from "../../actions";

const initState = {
  category: "",
};

const productsReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case FILTER_CATEGORY:
      return { ...state, category: payload };
    default:
      return state;
  }
};

export default productsReducer;
