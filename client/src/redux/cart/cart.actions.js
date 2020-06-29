import CartActionTypes from "./cart.types";

export const toggleCartVisibility = () => ({
  type: CartActionTypes.TOGGLE_CART_VISIBILITY,
});

export const addCartItem = (cartItem) => ({
  type: CartActionTypes.ADD_CART_ITEM,
  payload: cartItem,
});

export const removeCartItem = (cartItem) => ({
  type: CartActionTypes.REMOVE_CART_ITEM,
  payload: cartItem,
});

export const clearItemFromCart = (cartItem) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: cartItem,
});

export const clearCart = () => ({
  type: CartActionTypes.CLEAR_CART,
});
