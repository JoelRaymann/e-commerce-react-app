import { ShopActionTypes } from "./shop.types";

export const updateShopItems = (shopItems) => {
  return {
    type: ShopActionTypes.UPDATE_SHOP_ITEMS,
    payload: shopItems,
  };
};
