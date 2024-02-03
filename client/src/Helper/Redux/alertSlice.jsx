// import { createSlice } from "@reduxjs/toolkit";
// export const alertSlice = createSlice({
//   name: "alerts",
//   initialState: {
//     loading: false,
//   },
//   reducers: {
//     showloading: (state) => {
//       state.loading = true;
//     },
//     hideloading: (state) => {
//       state.loading = false;
//     },
//   },
// });

// export const { showloading, hideloading } = alertSlice.actions;


// loadingSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
