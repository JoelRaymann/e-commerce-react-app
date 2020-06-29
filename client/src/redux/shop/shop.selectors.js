import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopItems = createSelector(
  [selectShop],
  (shop) => shop.shopItems
);

export const selectShopCollectionPreview = createSelector(
  [selectShopItems],
  (shopItems) =>
    shopItems ? Object.keys(shopItems).map((key) => shopItems[key]) : []
);

export const selectShopCollection = (collectionUrlParam) =>
  createSelector([selectShopItems], (shopItems) =>
    shopItems ? shopItems[collectionUrlParam] : null
  );

export const selectIsFetchingShopItems = createSelector(
  [selectShop],
  (shop) => shop.isFetchingShopItems
);

export const selectIsShopItemsLoaded = createSelector(
  [selectShop],
  (shop) => !!shop.shopItems
);
