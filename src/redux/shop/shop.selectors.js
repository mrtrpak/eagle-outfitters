import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectDirectoryItems = createSelector(
  [selectShop],
  shop => shop.collections
);