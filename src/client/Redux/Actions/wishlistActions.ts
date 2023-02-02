import { ActionCreate, IWishlistState } from "../../Types/types";

const addWishlistItem = (
  title: string,
  id: string
): ActionCreate<IWishlistState> => {
  return {
    type: "ADD_WISHLIST_ITEM",
    payload: {
      title: title,
      id: id,
    },
  };
};

const removeWishlistItem = (id: string): ActionCreate<string> => {
  return {
    type: "REMOVE_WISHLIST_ITEM",
    payload: id,
  };
};

const wishlistActions = {
  addWishlistItem,
  removeWishlistItem,
};

export default wishlistActions;
