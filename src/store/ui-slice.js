import {createSlice} from "@reduxjs/toolkit";

const uiSlice = createSlice({
   name: 'ui',
   initialState: {loading: false},
   reducers: {
      startLoading(state, action) {
         state.loading = true;
      },
      endLoading(state, action) {
         state.loading = false;
      },
   },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
