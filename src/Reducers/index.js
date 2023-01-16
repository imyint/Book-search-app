import { combineReducers } from "redux";
import bookSearch from "./bookSearchReducer";
import wishlistItems from "./wishlistReducer";

const rootReducer = combineReducers({
  bookSearch,
  wishlistItems,
});

export default rootReducer;
