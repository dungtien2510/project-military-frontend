import { createSlice } from "@reduxjs/toolkit";
const initialInputState = {
  id: "",
  nameInput: "",
  yearMake: "",
  yearUse: "",
  type: "",
  typeMachine: "",
  note: "",
  status: "",
  location: "",
};
const inputSlice = createSlice({
  name: "input",
  initialState: initialInputState,
  reducers: {
    id(state, action) {
      state.id = action.payload;
    },
    nameInput(state, action) {
      state.nameInput = action.payload;
    },
    yearMake(state, action) {
      state.yearMake = action.payload;
    },
    yearUse(state, action) {
      state.yearUse = action.payload;
    },
    location(state, action) {
      state.location = action.payload;
    },
    type(state, action) {
      state.type = action.payload;
    },
    typeMachine(state, action) {
      state.typeMachine = action.payload;
    },
    status(state, action) {
      state.status = action.payload;
    },
    note(state, action) {
      state.note = action.payload;
    },
  },
});
export const inputActions = inputSlice.actions;
export default inputSlice.reducer;
