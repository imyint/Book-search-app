import { IUserState, IAuthState } from "../Types/types";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userToken = localStorage.getItem("userToken")
  ? localStorage.getItem("userToken")
  : null;

export const initialAuthState: IAuthState = {
  userInfo: { username: "", password: "" },
  userToken,
  success: false,
};

export const sendUserRegistration = createAsyncThunk(
  "user/sendUserRegistration",
  async (user: IUserState) => {
    try {
      const res = await fetch(`http://localhost:4000/user/register`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json",
        },
      });
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

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    setInputField: (state, action) => {
      state.userInfo[action.payload[0]] = action.payload[1];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sendUserRegistration.fulfilled, (state) => {
      state.success = true;
    });
  },
});

export const { setInputField } = authSlice.actions;
export default authSlice.reducer;
