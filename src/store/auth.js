import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
const initialAuth = {
  loading: false,
  token: Cookies.get("user") ? JSON.parse(Cookies.get("user")).token : "",
  fullName: Cookies.get("user") ? JSON.parse(Cookies.get("user")).fullName : "",
};
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuth,
  reducers: {
    setLogin(state, action) {
      state.fullName = action.payload.fullName;
      state.token = action.payload.token;
      const twoHourFromNow = new Date();
      twoHourFromNow.setHours(twoHourFromNow.getHours() + 2);
      const user = {
        fullName: action.payload.fullName,
        token: action.payload.token,
      };
      Cookies.set("user", JSON.stringify(user), { expires: twoHourFromNow });
    },
    setLogout(state) {
      state.fullName = "";
      state.token = "";
      Cookies.remove("user");
    },
    setLoading(state) {
      state.loading = !state.loading;
    },
  },
});
export const authActions = authSlice.actions;
export default authSlice.reducer;
