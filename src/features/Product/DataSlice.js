// This is file the file used for the only study purpose.. loading the dummy api.

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isError: false,
  user: [],
};

// This the createAsynctunk is the midddleware for the fecthing the data from the dummy API.
export const fetchUserData = createAsyncThunk(
  'user/fetchUserData',
  async () => {
    const users = await fetch('https://dummyjson.com/users');
    return users.json();
  }
);

export const UserDataSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {}, // If you have additional reducers, you can define them here
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      console.log('...pending the data. Wait for some time.');
      state.isLoading = true;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchUserData.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.log('Error', action.payload);
    });
  },
});

export default UserDataSlice.reducer;
