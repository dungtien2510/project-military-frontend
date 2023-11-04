import { createSlice } from "@reduxjs/toolkit";
const initialEditState = {
  isValid: false,
  addData: [],
  valueInput: {
    id: "",
    level: "",
    nameInput: "",
    yearMake: "",
    yearUse: "",
    type: "",
    typeMachine: "",
    note: "",
    status: "",
    location: "",
  },
  isClickSubmit: false,
  isResetForm: false,
};
const editSlice = createSlice({
  name: "edit",
  initialState: initialEditState,
  reducers: {
    editValid(state, action) {
      state.isValid = action.payload;
    },
    addDataHandler(state, action) {
      state.addData = [...state.addData, action.payload];
    },
    clicksubmitHandler(state, action) {
      state.isClickSubmit = action.payload;
    },
    setValueInput(state, action) {
      state.valueInput = {
        ...state.valueInput,
        [action.payload.name]: action.payload.value,
      };
      console.log(action.payload);
    },
    setIsResetForm(state, action) {
      state.isResetForm = action.payload;
    },
    resetValueInput(state) {
      state.valueInput = {
        id: "",
        level: "",
        nameInput: "",
        yearMake: "",
        yearUse: "",
        type: "",
        typeMachine: "",
        note: "",
        status: "",
        location: "",
      };
    },
  },
});
export const editActions = editSlice.actions;
export default editSlice.reducer;
