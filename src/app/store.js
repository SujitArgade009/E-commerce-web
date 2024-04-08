import { configureStore } from '@reduxjs/toolkit';
import productReducer from "../features/Product/ProductListSlice"

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
