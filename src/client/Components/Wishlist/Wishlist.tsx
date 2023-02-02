import { useAppDispatch, useAppSelector } from "../../Rtk";
import { deleteWishlistItem } from "../../Rtk/wishlistSlice";
import { State } from "../../Types/types";
import "./Wishlist.css";

export default function Wishlist() {
  const wishlistItems = useAppSelector((state: State) => state.wishlist);

  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteWishlistItem(id));
  };

  return (
    <div className="wishlist__div" data-testid="wishlist-container">
      <h3 className="wishlist__header">
        My reading wishlist({wishlistItems.length})
      </h3>
      <ul className="wishlistItem__ul">
        {wishlistItems?.map((item: { title: string; id: string }) => {
          const { id, title } = item;
          return (
            <li
              className="wishlistItem_li"
              key={id}
              data-testid="wishlist-item"
            >
              <span>{title}</span>
              <button onClick={() => handleDelete(id)} data-testid="delete-btn">
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
