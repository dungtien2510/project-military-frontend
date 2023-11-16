import { createSlice } from "@reduxjs/toolkit";
const initialError = {
  isError: false,
};
const errorSlice = createSlice({
  name: "error",
  initialState: initialError,
  reducers: {
    setIsError(state) {
      state.isError = !state.isError;
    },
  },
});
export const errorActions = errorSlice.actions;
export default errorSlice.reducer;
