import { useSelector, useDispatch } from "react-redux";
import allActions from "../../Actions";
import "./SearchBar.css";

export default function SearchBar() {
  const inputText = useSelector((state) => state.bookSearch.input);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(allActions.bookSearchActions.searchBook(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(allActions.bookSearchActions.getBookResults(inputText));
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
