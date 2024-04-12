import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/Product/ProductListSlice';
import UserDataReducer from '../features/Product/DataSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    userData: UserDataReducer, // this is used for study purpose to load the dummy data from the API endpoints
  },
});
