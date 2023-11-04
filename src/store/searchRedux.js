import { createSlice } from "@reduxjs/toolkit";
const initialSearchState = { isClickSearch: false, resultSearch: [] };
const searchSlice = createSlice({
  name: "search",
  initialState: initialSearchState,
  reducer: {
    clickSearchHandler(state) {
      state.isClickSearch = true;
    },
    resultData(state, action) {
      state.resultSearch = [action.payload];
    },
  },
});

export const searchActions = searchSlice.actions;
export default searchSlice.reducer;
