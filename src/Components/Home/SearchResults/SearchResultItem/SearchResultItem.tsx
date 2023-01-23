import { useDispatch } from "react-redux";
import allActions from "../../../../Actions";
import { IVolumeInfo } from "../../../../Types/types";
import "./SearchResultItem.css";

interface Props extends IVolumeInfo {
  imgSrc: string;
}

export default function SearchResultItem(props: Props) {
  const {
    id,
    volumeInfo: { title, authors, publisher, publishedDate, description },
    imgSrc,
  } = props;
  const dispatch = useDispatch();

  const addBook = (item: string, id: string): void => {
    dispatch(allActions.wishlistActions.addWishlistItem(item, id));
  };

  return (
    <div className="bookcard__div" onClick={() => addBook(title, id)}>
      <div className="bookcard__img-container">
        <img className="bookcard__img" src={imgSrc} alt="" />
      </div>
      <div className="bookcard__content">
        <h2>{title}</h2>
        <p className="bookcard__content-field">
          <span>Authors: </span>
          {authors}
        </p>
        <p className="bookcard__content-field">
          <span>Publisher: </span>
          {publisher}
        </p>
        <p className="bookcard__content-field">
          <span>Published date: </span>
          {publishedDate}
        </p>
        <p className="bookcard__content-field">
          <span>Description: </span>
          {description}
        </p>
      </div>
    </div>
  );
}
