import {
  ADD_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_FROM_CART,
  PREV_IMAGE,
  NEXT_IMAGE,
  OPEN_CART,
  CHECKOUT,
} from "../../actions";

import { move } from "../../../utils/helpers/moveIndex";

const initState = {
  items: [],
  currentIndex: 0,
  currentId: "",
  openCart: false,
};

const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      const from = [...state.items, { ...payload }].length - 1;
      const to = state.items.findIndex((item) => item.id === payload.id);
      return {
        ...state,
        items:
          to < 0
            ? [...state.items, { ...payload }]
            : move(from, to + 1, [...state.items, { ...payload }]),
      };

    case INCREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) => ({
          ...item,
          quantity:
            item.id === payload ||
            JSON.stringify(item.selectedArgs) ===
              JSON.stringify(payload.selectedArgs)
              ? item.quantity + 1
              : item.quantity,
        })),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) => ({
          ...item,
          quantity:
            item.id === payload ||
            JSON.stringify(item.selectedArgs) ===
              JSON.stringify(payload.selectedArgs)
              ? item.quantity - 1
              : item.quantity,
        })),
      };

    case REMOVE_FROM_CART:
      return {
        ...state,
        items: state.items.filter(
          (item) =>
            item.id !== payload.id ||
            JSON.stringify(item.selectedArgs) !==
              JSON.stringify(payload.selectedArgs)
        ),
      };

    case PREV_IMAGE:
      return {
        ...state,
        currentId: payload.id,
        currentIndex: state.currentIndex > 1 ? state.currentIndex - 1 : 0,
      };

    case NEXT_IMAGE:
      return {
        ...state,
        currentId: payload.id,
        currentIndex:
          state.currentIndex < payload.gallery.length - 1
            ? state.currentIndex + 1
            : 0,
      };

    case OPEN_CART:
      return {
        ...state,
        openCart: !state.openCart,
      };

    case CHECKOUT:
      return {
        ...state,
        items: [],
        openCart: false,
      };
    default:
      return state;
  }
};

export default cartReducer;
