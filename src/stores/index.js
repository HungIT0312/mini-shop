import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { Middleware } from "./cart/cart-slice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Middleware),
});
export default store;
