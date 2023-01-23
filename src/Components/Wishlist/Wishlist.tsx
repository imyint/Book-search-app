import { useSelector, useDispatch } from "react-redux";
import allActions from "../../Actions";
import "./Wishlist.css";

interface State {
  wishlistItems: { title: string; id: string }[];
}

export default function Wishlist() {
  const wishlistItems = useSelector((state: State) => state.wishlistItems);
  const dispatch = useDispatch();

  const handleDelete = (id: string): void => {
    dispatch(allActions.wishlistActions.removeWishlistItem(id));
  };

  return (
    <div className="wishlist__div">
      <h3 className="wishlist__header">
        My reading wishlist({wishlistItems.length})
      </h3>
      <ul>
        {wishlistItems?.map((item: { title: string; id: string }) => {
          const { id, title } = item;
          return (
            <li className="wishlistItem" key={id}>
              <span>{title}</span>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
