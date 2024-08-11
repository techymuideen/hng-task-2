import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import themeSlice from "./theme-slice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, theme: themeSlice.reducer },
});

export default store;
