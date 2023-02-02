import { IUserState, IAuthState } from "../Types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

export const initialUserState: IAuthState = {
  userInfo: { username: "", password: "" },
  userToken,
  success: false,
};

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user: IUserState) => {
    try {
      const res = await fetch(`http://localhost:4000/user/login`, {
        method: "POST",
        body: JSON.stringify({
          user,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      localStorage.setItem("userToken", JSON.stringify(res));
      const data = res.json();
      return data;
    } catch (err) {
      if (err.response && err.response.data.message) {
        return err.response.data.message;
      } else {
        return err.message;
      }
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setInputField: (state, action) => {
      state.userInfo[action.payload[0]] = action.payload[1];
    },
    logout: (state) => {
      localStorage.removeItem("userToken");
      state.userInfo = { username: "", password: "" };
      state.userToken = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.userToken = action.payload;
      state.success = true;
    });
  },
});

export const { setInputField, logout } = userSlice.actions;
export default userSlice.reducer;
