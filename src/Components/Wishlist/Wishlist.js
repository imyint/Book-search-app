import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import allActions from "../../Actions";
import "./Wishlist.css";

export default function Wishlist() {
  const wishlistItems = useSelector((state) => state.wishlistItems);
  const dispatch = useDispatch();

  console.log(wishlistItems);

  const handleDelete = (id) => {
    dispatch(allActions.wishlistActions.removeWishlistItem(id));
  };

  return (
    <>
      <h3 className="wishlist__header">
        My reading wishlist({wishlistItems.length})
      </h3>
      <ul>
        {wishlistItems?.map((item) => {
          const { id, title } = item;
          return (
            <li className="wishlistItem" key={id}>
              <span>{title}</span>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
