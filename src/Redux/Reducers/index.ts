import { combineReducers } from "redux";
import bookSearch from "./bookSearchReducer";
import wishlist from "./wishlistReducer";
import { State } from "../../Types/types";

const rootReducer = combineReducers<State>({
  bookSearch,
  // wishlistItems,
  wishlist,
});

export default rootReducer;
