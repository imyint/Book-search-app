import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import allActions from "../../../Actions";
import "./SearchBar.css";
import { useCallback, useEffect } from "react";
import { State } from "../../../Types/types";

export default function SearchBar() {
  const inputText = useSelector((state: State) => state.bookSearch.input);
  const dispatch = useDispatch();

  const debouncedRequest = useCallback(
    _.debounce((inputText: string) => {
      if (inputText.trim() !== "") {
        dispatch(allActions.bookSearchActions.getBookResults(inputText) as any);
      }
    }, 400),
    []
  );

  useEffect(() => {
    debouncedRequest(inputText);
  }, [inputText]);

  const handleChange = (e: React.SyntheticEvent<EventTarget>): void => {
    const eventInput = (e.target as HTMLInputElement).value;
    dispatch(allActions.bookSearchActions.searchBook(eventInput));
  };

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>): void => {
    e.preventDefault();
    dispatch(allActions.bookSearchActions.getBookResults(inputText) as any);
    dispatch(allActions.bookSearchActions.searchBook(""));
  };

  return (
    <form className="booksearch__form">
      <input
        className="booksearch__input"
        type="text"
        value={inputText}
        onChange={handleChange}
      />
      <button
        className="booksearch__submit"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
}
