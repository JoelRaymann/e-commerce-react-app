import { all, call } from "redux-saga/effects";

// Add all sagas here
import { fetchShopItemsStart } from "./shop/shop.sagas";

export default function* rootSaga() {
  yield all([call(fetchShopItemsStart)]);
}
