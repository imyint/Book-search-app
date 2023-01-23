export type ActionCreate<T> = { type: string; payload: T };

export interface IVolumeInfo {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    publisher: string;
    publishedDate: string;
    description: string;
    imageLinks: string | { smallThumbnail: string; thumbnail: string };
  };
}

export interface IAPIResponseData {
  items: IVolumeInfo[];
  totalItems: number;
  kind: string;
}

export interface IBookState {
  input: string;
  results: undefined | IVolumeInfo[];
  dataLoading: boolean;
}

export interface IWishlistState {
  title: string;
  id: string;
}

export interface State {
  bookSearch: IBookState;
  wishlistItems: IWishlistState[];
}
