import Wishlist from "./Wishlist";
import bookSlice from "../../Rtk/bookSlice";
import wishlistSlice from "../../Rtk/wishlistSlice";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { render, screen, fireEvent } from "@testing-library/react";

const createMockStore = (
  preloadedState = {
    bookSearch: {
      input: "",
      results: [],
      dataLoading: false,
    },
    wishlist: [{ title: "Book1", id: "abcd" }],
  }
) => {
  return configureStore({
    reducer: {
      bookSearch: bookSlice,
      wishlist: wishlistSlice,
    },
    preloadedState,
  });
};

const renderWithProvider = (preloadedState) => {
  render(
    <Provider store={createMockStore(preloadedState)}>
      <Wishlist />
    </Provider>
  );
};

describe("Wishlist component", () => {
  test("Wishlist component should render", () => {
    renderWithProvider();
    const wishlistEl = screen.queryByTestId("wishlist-container");
    expect(wishlistEl).toBeInTheDocument();
  });

  test("Renders the correct number of list items based on state", () => {
    renderWithProvider();
    const wishlistHeaderEl = screen.queryByText("My reading wishlist(1)");
    expect(wishlistHeaderEl).toBeInTheDocument();
    const ulEl = screen.getByRole("list");
    expect(ulEl.querySelectorAll("li")).toHaveLength(1);
  });

  test("Deletes an item when the delete button is clicked", () => {
    renderWithProvider();
    const wishlistItem = screen.queryByTestId("wishlist-item");
    const wishlistDeleteButton = screen.queryByTestId("delete-btn");
    fireEvent.click(wishlistDeleteButton);
    const wishlistItems = screen.queryAllByTestId("wishlist-item");
    expect(wishlistItem).not.toBeInTheDocument();
    expect(wishlistItems).toHaveLength(0);
  });
});
