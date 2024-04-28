// Store of the reduxjs application
import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/counter";
import movementReducer from "./reducers/movement";
import cartReducer from "./reducers/cart";

const sampleMiddleware = (props) => {
  return (next) => {
    return (action) => {
      const result = next(action);

      // These statements will be executed once the action is Done execution
      console.log(result);
      console.log(props.getState());

      localStorage.setItem("redux_state", JSON.stringify(props.getState()));

      return result;
    };
  };
};

const store = configureStore({
  reducer: {
    countReducer,
    movementReducer,
    cartReducer,
  },
  // disable the devTools in Production server
  devTools: true,
  middleware: (defaultMiddlewareFn) => [
    ...defaultMiddlewareFn(),
    sampleMiddleware,
  ],
  preloadedState: (function () {
    const val = localStorage.getItem("redux_state");
    if (val !== null) {
      return JSON.parse(val);
    }
  })(),
});

export default store;
