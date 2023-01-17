import { useDispatch } from "react-redux";
import allActions from "../../../Actions";
import "./SearchResultItem.css";

export default function SearchResultItem(props) {
  const { id, volumeInfo, imgSrc } = props;
  const dispatch = useDispatch();

  const addBook = (item, id) => {
    dispatch(allActions.wishlistActions.addWishlistItem(item, id));
  };

  return (
    <div
      className="bookcard__div"
      onClick={() => addBook(volumeInfo.title, id)}
    >
      <div className="bookcard__img-container">
        <img className="bookcard__img" src={imgSrc} alt="" />
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
}
