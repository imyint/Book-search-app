import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IBookState, IAPIResponseData } from "../Types/types";

export const initialBookState: IBookState = {
  input: "",
  results: undefined,
  dataLoading: false,
};

export const getBookResults = createAsyncThunk<IAPIResponseData, string>(
  "book/getBookResults",
  async (bookTitle) => {
    const bookParam = bookTitle.toLowerCase().split(" ").join("");
    const res = await fetch(`http://localhost:4000/books?q=${bookParam}`);
    const data = res.json();
    return data;
  }
);

export const bookSlice = createSlice({
  name: "bookSearch",
  initialState: initialBookState,
  reducers: {
    searchBook: (state, action) => {
      state.input = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBookResults.pending, (state) => {
        state.dataLoading = true;
        state.results = undefined;
      })
      .addCase(getBookResults.fulfilled, (state, action) => {
        const data = action.payload;
        state.dataLoading = false;
        state.results = data.items.map((item) => {
          const {
            title,
            authors,
            publisher,
            publishedDate,
            description,
            imageLinks,
          } = item.volumeInfo;
          return {
            id: item.id,
            volumeInfo: {
              title,
              authors,
              publisher,
              publishedDate,
              description,
              imageLinks,
            },
          };
        });
      });
  },
});

export const { searchBook } = bookSlice.actions;
export default bookSlice.reducer;
