import { useAppDispatch, useAppSelector } from "../../Rtk";
import { removeWishlistItem } from "../../Rtk/wishlistSlice";
import { State } from "../../Types/types";
import "./Wishlist.css";

export default function Wishlist() {
  const wishlistItems = useAppSelector((state: State) => state.wishlist);
  const dispatch = useAppDispatch();
  console.log(wishlistItems);

  const handleDelete = (id: string): void => {
    dispatch(removeWishlistItem(id));
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
