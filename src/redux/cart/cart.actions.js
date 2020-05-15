import CartActionTypes from "./cart.types";

export const toggleCartVisibility = () => ({
  type: CartActionTypes.TOGGLE_CART_VISIBILITY,
});

export const addCartItem = (cartItem) => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: cartItem,
});
