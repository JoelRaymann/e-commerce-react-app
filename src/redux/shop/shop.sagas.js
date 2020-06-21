import { takeLatest, call, put } from "redux-saga/effects";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

import { fetchShopItemsSuccess, fetchShopItemsFailure } from "./shop.actions";

import ShopActionTypes from "./shop.types";

/**
 * A redux saga function that executes the code needed
 * to fetch the shop items asynchronously from the backend.
 *
 */
export function* fetchShopItemsAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    // checkpoint 1: getting the snapshot
    const snapshot = yield collectionRef.get();
    // checkpoint 2: converting snapshop to collection items
    const collectionsMap = yield call(convertCollectionSnapshotToMap, snapshot);
    // Checkpoint 3: dispatching success
    yield put(fetchShopItemsSuccess(collectionsMap));
  } catch (error) {
    // Checkpoint 3: dispatching failure if failed
    yield put(fetchShopItemsFailure(error.message));
  }
}

/**
 * A redux Saga function that fetches the shop items from the backend
 * using redux-saga methods.
 */
export function* fetchShopItemsStart() {
  yield takeLatest(ShopActionTypes.FETCH_SHOP_ITEMS_START, fetchShopItemsAsync); // yield an action
}
