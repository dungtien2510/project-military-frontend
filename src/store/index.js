import { configureStore } from "@reduxjs/toolkit";

import editReducer from "./editRedux";
import searchReducer from "./searchRedux";
import inputReducer from "./input";

const store = configureStore({
  reducer: { edit: editReducer, search: searchReducer, input: inputReducer },
});
export default store;
