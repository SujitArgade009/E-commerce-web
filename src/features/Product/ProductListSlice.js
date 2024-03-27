import { createSlice } from '@reduxjs/toolkit';
// import { fetchProductsData } from './ProductListAPI';

const productSlice = createSlice({
  name: 'Products',
  initialState: {
    products: []
  },
  reducers: {
    addNewItem: (state, action) => {
      state.push(action.payload);
    }
  },
});

export const {addNewItem} =productSlice.actions;
export default productSlice.reducer;
