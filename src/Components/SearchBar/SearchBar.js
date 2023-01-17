import { useSelector, useDispatch } from "react-redux";
import _ from "lodash";
import allActions from "../../Actions";
import "./SearchBar.css";
import { useCallback, useEffect } from "react";

export default function SearchBar() {
  const inputText = useSelector((state) => state.bookSearch.input);
  const dispatch = useDispatch();

  const debouncedRequest = useCallback(
    _.debounce((inputText) => {
      if (inputText.trim() !== "") {
        dispatch(allActions.bookSearchActions.getBookResults(inputText));
      }
    }, 400),
    []
  );

  useEffect(() => {
    debouncedRequest(inputText);
  }, [inputText]);

  const handleChange = (e) => {
    dispatch(allActions.bookSearchActions.searchBook(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(allActions.bookSearchActions.getBookResults(inputText));
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
