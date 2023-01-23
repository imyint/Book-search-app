import { combineReducers } from "redux";
import bookSearch from "./bookSearchReducer";
import wishlistItems from "./wishlistReducer";
import { State } from "../Types/types";

const rootReducer = combineReducers<State>({
  bookSearch,
  wishlistItems,
});

export default rootReducer;
