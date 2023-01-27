import { ActionCreate, IVolumeInfo, IAPIResponseData } from "../../Types/types";
import { Dispatch } from "redux";

const searchBook = (book: string): ActionCreate<string> => {
  return {
    type: "SEARCH_BOOK",
    payload: book,
  };
};

const startFetchingData = (): { type: string } => {
  return {
    type: "START_FETCHING_DATA",
  };
};

const fetchBookResults = (
  res: IAPIResponseData
): ActionCreate<IVolumeInfo[]> => {
  return {
    type: "GET_BOOK_RESULTS",
    payload: res.items.map((item: any) => {
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
    }),
  };
};

const getBookResults = (bookTitle: string) => {
  return async (dispatch: Dispatch): Promise<void> => {
    dispatch(startFetchingData());
    const bookParam = bookTitle.toLowerCase().split(" ").join("");
    const URL = `https://www.googleapis.com/books/v1/volumes?q=${bookParam}&startIndex=0&maxResults=20`;

    const res = await fetch(URL);
    const data = await res.json();
    dispatch(fetchBookResults(data));
  };
};

const bookSearchActions = {
  searchBook,
  getBookResults,
};

export default bookSearchActions;
