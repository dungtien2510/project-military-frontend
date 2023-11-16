import { configureStore } from "@reduxjs/toolkit";

import editReducer from "./editRedux";
import searchReducer from "./searchRedux";
import inputReducer from "./input";
import authReducer from "./auth";
import errorReducer from "./error";

const store = configureStore({
  reducer: {
    edit: editReducer,
    search: searchReducer,
    input: inputReducer,
    auth: authReducer,
    error: errorReducer,
  },
});
export default store;
