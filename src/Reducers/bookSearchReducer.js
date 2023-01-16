export const initialBookState = {
  input: "",
  results: undefined,
  dataLoading: false,
};

const bookSearch = (books = initialBookState, action) => {
  switch (action.type) {
    case "START_FETCHING_DATA":
      return { ...books, dataLoading: true };
    case "SEARCH_BOOK":
      return {
        ...books,
        input: action.payload,
        results: undefined,
      };
    case "GET_BOOK_RESULTS":
      return {
        input: "",
        results: action.payload,
        dataLoading: false,
      };
    default:
      return books;
  }
};

export default bookSearch;
