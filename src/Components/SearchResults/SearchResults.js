import { useSelector, useDispatch } from "react-redux";
import allActions from "../../Actions";
import "./SearchResults.css";

export default function SearchResults() {
  const dataLoading = useSelector((state) => state.bookSearch.dataLoading);
  const bookResults = useSelector((state) => state.bookSearch.results);
  const dispatch = useDispatch();

  const addBook = (item, id) => {
    dispatch(allActions.wishlistActions.addWishlistItem(item, id));
  };

  return (
    <div className="bookresults__div">
      {dataLoading && <h2>Loading...</h2>}
      {bookResults?.map((result) => {
        const { id, volumeInfo } = result;
        const imgSrc =
          typeof volumeInfo.imageLinks === "object"
            ? volumeInfo.imageLinks.thumbnail
            : volumeInfo.imageLinks;

        return (
          <div
            className="bookcard__div"
            key={id}
            onClick={() => addBook(volumeInfo.title, id)}
          >
            <div className="bookcard__img-container">
              <img className="bookcard__img" src={imgSrc} />
            </div>
            <div className="bookcard__content">
              <h2>{volumeInfo.title}</h2>
              <p className="bookcard__content-field">
                <span>Authors: </span>
                {volumeInfo.authors}
              </p>
              <p className="bookcard__content-field">
                <span>Publisher: </span>
                {volumeInfo.publisher}
              </p>
              <p className="bookcard__content-field">
                <span>Published date: </span>
                {volumeInfo.publishedDate}
              </p>
              <p className="bookcard__content-field">
                <span>Description: </span>
                {volumeInfo.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
