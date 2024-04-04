import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchProductsData } from './ProductListAPI';

const initialState = {
  value: 0,
  status: 'idle',
};

export const fetchAllproductAsync = createAsyncThunk(
  'counter/fetchProductsData',
  async () => {
    const response= await fetchProductsData();
    return response.data;
  }
);

export const productSlice=createSlice({
    name:"Products",
    initialState:[],
    reducers:{
      fetchProductsData:(state, action)=>{
        
      }
    }
})

// import { createSlice } from '@reduxjs/toolkit';
// // import { fetchProductsData } from './ProductListAPI';

// const productSlice = createSlice({
//   name: 'Products',
//   initialState: {
//     products: []
//   },
//   reducers: {
//     addNewItem: (state, action) => {
//       state.push(action.payload);
//     }
//   },
// });

// export const {addNewItem} =productSlice.actions;
// export default productSlice.reducer;
