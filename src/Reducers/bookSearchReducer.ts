import { ActionCreate, IVolumeInfo, IBookState } from "../Types/types";

export const initialBookState: IBookState = {
  input: "",
  results: undefined,
  dataLoading: false,
};

const bookSearch = (
  books = initialBookState,
  action: ActionCreate<IVolumeInfo[] | string>
): IBookState => {
  switch (action.type) {
    case "START_FETCHING_DATA":
      return {
        ...books,
        results: undefined,
        dataLoading: true,
      };
    case "SEARCH_BOOK":
      if (typeof action.payload === "string") {
        return {
          ...books,
          input: action.payload,
          results: undefined,
        };
      }
    case "GET_BOOK_RESULTS":
      if (typeof action.payload === "object") {
        return {
          ...books,
          results: action.payload,
          dataLoading: false,
        };
      }
    default:
      return books;
  }
};

export default bookSearch;
