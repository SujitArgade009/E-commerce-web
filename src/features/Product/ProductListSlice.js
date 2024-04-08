import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  // products: [],
  isLoading: false,
  isError: false,
  products: [],
};

// Action for the fetching the data through the middleware CreateAsyncThunk from API
export const allProductAsync = createAsyncThunk('product', async () => {
  const response = await fetch('http://localhost:8000/products');
  return response.json();
});

export const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(allProductAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(allProductAsync.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
    builder.addCase(allProductAsync.rejected, (state, action) => {
      console.log('Error', action.payload);
      state.isError = true;
    });
  },
});

export default productSlice.reducer;
