import { ShopActionTypes } from "./shop.types";

const INITIAL_STATE = {
  shopItems: null,
  isFetchingShopItems: false, // To notify if a fetch is going or not for shop items
  errorMessage: undefined, // to keep error messages
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // Handling fetching shop item
    case ShopActionTypes.FETCH_SHOP_ITEMS_START:
      return {
        ...state,
        isFetchingShopItems: true,
      };
    // Handling action for successful shop item fetch
    case ShopActionTypes.FETCH_SHOP_ITEMS_SUCCESS:
      return {
        ...state,
        isFetchingShopItems: false,
        shopItems: action.payload,
      };
    // Handling action for failed shop item fetch
    case ShopActionTypes.FETCH_SHOP_ITEMS_FAILURE:
      return {
        ...state,
        isFetchingShopItems: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;
