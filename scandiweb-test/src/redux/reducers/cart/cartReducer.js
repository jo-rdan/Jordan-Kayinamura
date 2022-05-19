import {
  ADD_TO_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  REMOVE_FROM_CART,
  PREV_IMAGE,
  NEXT_IMAGE,
} from "../../actions";

const initState = {
  items: [],
  currentIndex: 0,
  currentId: "",
};

const cartReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART:
      return { ...state, items: [...state.items, { ...payload }] };

    case INCREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) => ({
          ...item,
          quantity: item.id === payload ? item.quantity + 1 : item.quantity,
        })),
      };

    case DECREASE_QUANTITY:
      return {
        ...state,
        items: state.items.map((item) => ({
          ...item,
          quantity: item.id === payload ? item.quantity - 1 : item.quantity,
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

    default:
      return state;
  }
};

export default cartReducer;
