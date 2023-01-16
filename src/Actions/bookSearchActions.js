const searchBook = (book) => {
  return {
    type: "SEARCH_BOOK",
    payload: book,
  };
};

const getBookResults = (bookTitle) => {
  return (dispatch) => {
    dispatch({
      type: "START_FETCHING_DATA",
    });
    const bookParam = bookTitle.toLowerCase().split(" ").join("");
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${bookParam}&startIndex=0&maxResults=20`;
    fetch(URL)
      .then((res) => res.json())
      .then((res) => {
        dispatch({
          type: "GET_BOOK_RESULTS",
          payload: res.items.map((item) => {
            return {
              id: item.id,
              volumeInfo: item.volumeInfo,
            };
          }),
        });
      });
  };
};

export default {
  searchBook,
  getBookResults,
};
