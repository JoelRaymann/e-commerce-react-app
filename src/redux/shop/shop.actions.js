import { ShopActionTypes } from "./shop.types";

// Import firestore utils
import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

/**
 * Redux Action function to initiate the shop items fetching
 * request from the backend.
 *
 * @returns {Object} The action object for the redux shop reducer
 */
export const fetchShopItemsStart = () => {
  console.log(`${fetchShopItemsStart.name} is fired`);
  return {
    type: ShopActionTypes.FETCH_SHOP_ITEMS_START,
  };
};

/**
 * Redux Action function that is fired when the shop item
 * fetch call is successful. This function returns the action
 * object that assigns the shop items to the redux store.
 *
 * @param {(Object)} shopItems - A Series of Shop Item objects
 *
 * @returns {Object} The action object for the redux shop reducer
 */
export const fetchShopItemsSuccess = (shopItems) => {
  return {
    type: ShopActionTypes.FETCH_SHOP_ITEMS_SUCCESS,
    payload: shopItems,
  };
};

/**
 * Redux Action function that is fired when the shop item
 * fetch call failed. This function returns the action
 * object that assigns the error message for the failure
 * to the redux store.
 *
 * @param {String} errorMessage - The error message received from the failed
 * fetch request
 *
 * @returns {Object} The action object for the redux shop reducer
 */
export const fetchShopItemsFailure = (errorMessage) => {
  return {
    type: ShopActionTypes.FETCH_SHOP_ITEMS_FAILURE,
    payload: errorMessage,
  };
};

/**
 * A Asynchronize action function that is fired to fetch the
 * shop items data from the backend. This action function
 * returns a function that takes the redux dispatcher and
 * uses it to fire different actions such as start, success
 * or failure actions to indicate the progress of the fetching
 * process. This is possible due to redux-thunk.
 *
 * @returns {Function} A function that takes the dispatcher and
 * uses it to execute the async shop items fetch calls.
 */
export const fetchShopItemsStartAsync = () => {
  // return the function that takes the dispatch and does the async actions
  // needed. In our case, it is the call to the firestore DB
  return (dispatch) => {
    const collectionRef = firestore.collection("collections");

    // dispatch the fetch start action
    dispatch(fetchShopItemsStart());

    // get the shopitems data
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionsMap = convertCollectionSnapshotToMap(snapshot);

        // dispatch the collection map on successful fetch
        dispatch(fetchShopItemsSuccess(collectionsMap));
      })
      .catch((error) => {
        // dispatch error message on failure
        dispatch(fetchShopItemsFailure(error.message));
      });
  };
};
