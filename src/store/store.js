// Store of the reduxjs application
import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducers/counter";
import movementReducer from "./reducers/movement";
import cartReducer from "./reducers/cart";

const store = configureStore({
  reducer: {
    countReducer,
    movementReducer,
    cartReducer,
  },
  devTools: true,
});

export default store;
