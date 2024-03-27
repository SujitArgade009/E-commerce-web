import { configureStore } from '@reduxjs/toolkit';
import productsReducer from "../features/Product/ProductListSlice";

 export const store = configureStore({
  reducer: {
    item: productsReducer,
  },
});

export default store;
