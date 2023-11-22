import { configureStore } from "@reduxjs/toolkit";
import counterSliceReducer from "./reducers/counterSliceReducer";
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

export const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    product: productReducer,
    cart: cartReducer,
  },
});
