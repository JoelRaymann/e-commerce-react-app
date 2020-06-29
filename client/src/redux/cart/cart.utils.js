export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) => {
      if (cartItem.id === cartItemToAdd.id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity + 1,
        };
      } else {
        return cartItem;
      }
    });
  } else {
    return [
      ...cartItems, // spread the cartitems
      {
        ...cartItemToAdd, // add the new cart item with a small quantity property injection
        quantity: 1,
      },
    ];
  }
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return clearItemFromCart(cartItems, cartItemToRemove);
  } else {
    return cartItems.map((cartItem) => {
      if (cartItem.id === cartItemToRemove.id) {
        return {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        };
      } else {
        return cartItem;
      }
    });
  }
};

export const clearItemFromCart = (cartItems, cartItemToClear) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
};
