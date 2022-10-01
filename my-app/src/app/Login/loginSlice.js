import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./loginAPI";
import jwt_decode from "jwt-decode";

const initialState = {
  userName: "",
  token: "",
  user_id: "",
  logged: false,
};

export const loginInAsysnc = createAsyncThunk(
  "login/loginUser",
  async (creds) => {
    // console.log(creds)
    const response = await loginUser(creds);
    return response.data;
  }
);

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = "";
      state.logged = false;
      state.userName = "";
      state.user_id = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginInAsysnc.fulfilled, (state, action) => {
      if (action.payload.access) {
        state.token = action.payload.access;
        state.logged = true;
        state.userName = jwt_decode(action.payload.access).username;
        state.user_id = jwt_decode(action.payload.access).user_id;
        // console.log(jwt_decode(action.payload.access).user_id);
      }
    });
  },
});

export const { logout } = loginSlice.actions;
export const selectLogged = (state) => state.login.logged;
export const selectUserName = (state) => state.login.userName;
export const selectUserID = (state) => state.login.user_id;
export const selectToken = (state) => state.login.token;

export default loginSlice.reducer;
