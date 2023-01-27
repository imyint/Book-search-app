import { createSlice } from "@reduxjs/toolkit";
import { IWishlistState } from "../Types/types";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [] as IWishlistState[],
  reducers: {
    addWishlistItem: (state, action) => {
      if (!state.some((item) => item.id === action.payload.id)) {
        state.push(action.payload);
      }
    },
    removeWishlistItem: (state, action) => {
      state.splice(
        state.findIndex((item) => item.id === action.payload),
        1
      );
    },
  },
});

export const { addWishlistItem, removeWishlistItem } = wishlistSlice.actions;
export default wishlistSlice.reducer;
