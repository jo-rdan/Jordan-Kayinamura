import {
  legacy_createStore as createStore,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { loadState, saveState } from "../utils/storage/storage";
import { throttle } from "../utils/storage/throttle";

const persistedState = loadState();

const middleware = [thunk];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  persistedState,
  composeEnhancers(applyMiddleware(...middleware))
);

store.subscribe(() => throttle(() => saveState(store.getState()), 2000));

export default store;
