import { useAppDispatch, useAppSelector } from "../../../Rtk";
import _ from "lodash";
import "./SearchBar.css";
import { useCallback, useEffect } from "react";
import { State } from "../../../Types/types";
import { getBookResults, searchBook } from "../../../Rtk/bookSlice";

export default function SearchBar() {
  const inputText = useAppSelector((state: State) => state.bookSearch.input);
  const dispatch = useAppDispatch();

  const debouncedRequest = useCallback(
    _.debounce((inputText: string) => {
      if (inputText.trim() !== "") {
        dispatch(getBookResults(inputText) as any);
      }
    }, 400),
    []
  );

  useEffect(() => {
    debouncedRequest(inputText);
  }, [inputText]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const eventInput = e.target.value;
    dispatch(searchBook(eventInput));
  };

  const handleSubmit = (
    e: React.FormEvent<EventTarget | HTMLFormElement>
  ): void => {
    e.preventDefault();
    dispatch(getBookResults(inputText) as any);
    dispatch(searchBook(""));
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
