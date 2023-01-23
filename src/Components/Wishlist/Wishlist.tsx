import { useSelector, useDispatch } from "react-redux";
import allActions from "../../Actions";
import { State } from "../../Types/types";
import "./Wishlist.css";

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
      <ul className="wishlistItem__ul">
        {wishlistItems?.map((item: { title: string; id: string }) => {
          const { id, title } = item;
          return (
            <li className="wishlistItem_li" key={id}>
              <span>{title}</span>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
