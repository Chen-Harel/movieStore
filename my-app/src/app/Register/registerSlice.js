import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerUserDB } from "./registerAPI";

const initialState = {
  usersList: [],
  token: "",
  username: "",
  logged: false,
};

export const addUserAsync = createAsyncThunk(
  "register/addUserDB",
  async (newUser) => {
    const response = await registerUserDB(newUser);
    return response.data;
  }
);

export const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
//   extraReducers: (builder) => {
//     builder.addCase(registerUserDB.fulfilled, (state, action) => {
//       state.logged = true;
//     });
//   },
});

export default registerSlice.reducer;
