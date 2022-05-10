import { CHANGE_CURRENCY_SYMBOL } from "../../actions";

const initState = {
  symbol: "",
};

const currencySwitcherReducer = (state = initState, action) => {
  switch (action.type) {
    case CHANGE_CURRENCY_SYMBOL:
      return {
        ...state,
        symbol: action.payload,
      };

    default:
      return state;
  }
};

export default currencySwitcherReducer;
