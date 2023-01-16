const addWishlistItem = (item, id) => {
  return {
    type: "ADD_WISHLIST_ITEM",
    payload: {
      title: item,
      id: id,
    },
  };
};

const removeWishlistItem = (id) => {
  return {
    type: "REMOVE_WISHLIST_ITEM",
    payload: id,
  };
};

export default {
  addWishlistItem,
  removeWishlistItem,
};
