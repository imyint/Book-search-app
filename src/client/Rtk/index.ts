import { configureStore } from "@reduxjs/toolkit";
import bookSlice from "./bookSlice";
import wishlistSlice from "./wishlistSlice";
import { State } from "../Types/types";
import { initialBookState } from "./bookSlice";
import userSlice, { initialUserState } from "./userSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import authSlice, { initialAuthState } from "./authSlice";

const saveToLocalStorage = (state: State): void => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("persistedState", serializedState);
  } catch (error) {
    console.log(error);
  }
};

const loadFromLocalStorage = (): State => {
  try {
    const serializedState = localStorage.getItem("persistedState");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (error) {
    console.log(error);
    return undefined;
  }
};

export const store = configureStore({
  reducer: {
    user: userSlice,
    auth: authSlice,
    bookSearch: bookSlice,
    wishlist: wishlistSlice,
  },
  // preloadedState: loadFromLocalStorage(),
});

store.subscribe(() =>
  saveToLocalStorage({
    user: initialUserState,
    auth: initialAuthState,
    bookSearch: initialBookState,
    wishlist: store.getState().wishlist,
  })
);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
