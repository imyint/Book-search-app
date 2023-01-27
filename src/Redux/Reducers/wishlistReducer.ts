import { ActionCreate, IWishlistState } from "../../Types/types";

const wishlist = (
  wishlistItems: IWishlistState[] = [],
  action: ActionCreate<IWishlistState | string>
): IWishlistState[] => {
  switch (action.type) {
    case "ADD_WISHLIST_ITEM":
      if (typeof action.payload === "object") {
        return wishlistItems.some(
          (item) => item.id === (action.payload as IWishlistState).id
        )
          ? wishlistItems
          : [...wishlistItems, action.payload];
      }
      break;
    case "REMOVE_WISHLIST_ITEM":
      return wishlistItems.filter((item) => item.id !== action.payload);
    default:
      return wishlistItems;
  }
};

export default wishlist;
