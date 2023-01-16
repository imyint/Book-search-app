import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducers";
import { initialBookState } from "../Reducers/bookSearchReducer";

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("persistedState", serializedState);
  } catch (error) {
    console.log(error);
  }
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("persistedState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

const store = createStore(
  rootReducer,
  loadFromLocalStorage(),
  applyMiddleware(thunk)
);

store.subscribe(() =>
  saveToLocalStorage({
    bookSearch: initialBookState,
    wishlistItems: store.getState().wishlistItems,
  })
);

export default store;
