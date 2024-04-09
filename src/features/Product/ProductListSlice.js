import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
};

// Action for the fetching the data through the middleware CreateAsyncThunk from API
export const allProductAsync = createAsyncThunk('product', async () => {
  const response = await fetch('http://localhost:8000/products');
  return response.json();
});

export const fetchProductByFilter = createAsyncThunk(
  'productfilter',
  async (filter) => {
    // we need an object so we will get the value form that object.
    let queryString = '';
    for (let key in filter) {
      queryString += `${key}=${filter[key]}&`;
    }
    const response = await fetch(
      'http://localhost:8000/products?' + queryString
    );
    return response.json();
  }
);

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
    builder.addCase(fetchProductByFilter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProductByFilter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    });
  },
});

export default productSlice.reducer;
