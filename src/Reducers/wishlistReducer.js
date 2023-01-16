const wishlistItems = (wishlistItems = [], action) => {
  switch (action.type) {
    case "ADD_WISHLIST_ITEM":
      return wishlistItems.some((item) => item.id === action.payload.id)
        ? wishlistItems
        : [...wishlistItems, action.payload];
    case "REMOVE_WISHLIST_ITEM":
      return wishlistItems.filter((item) => item.id !== action.payload);
    default:
      return wishlistItems;
  }
};

export default wishlistItems;
