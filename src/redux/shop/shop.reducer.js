// import testing data
import SHOP_DATA from "../../data/shop.data";

const INITIAL_STATE = {
  shopItems: SHOP_DATA,
};

export const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer;
