import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IWishlistState } from "../Types/types";

export const getWishlistState = createAsyncThunk<IWishlistState[]>(
  "wishlist/getWishlistState",
  async () => {
    const res = await fetch(`http://localhost:4000/wishlist`);
    const data = res.json();
    return data;
  }
);

export const addWishlistItem = createAsyncThunk<
  IWishlistState[],
  { title: string; id: string }
>("wishlist/addWishlistItem", async ({ title, id }) => {
  const res = fetch("http://localhost:4000/wishlist", {
    method: "POST",
    body: JSON.stringify({
      title,
      id,
    }),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = (await res).json();
  return data;
});

export const deleteWishlistItem = createAsyncThunk<IWishlistState[], string>(
  "wishlist/deleteWishlistItem",
  async (id) => {
    const res = fetch("http://localhost:4000/wishlist", {
      method: "DELETE",
      body: JSON.stringify({
        id,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    const data = (await res).json();
    return data;
  }
);

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [] as IWishlistState[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWishlistState.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(addWishlistItem.fulfilled, (state, action) => {
        return action.payload;
      })
      .addCase(deleteWishlistItem.fulfilled, (state, action) => {
        return action.payload;
      });
  },
});

export default wishlistSlice.reducer;
