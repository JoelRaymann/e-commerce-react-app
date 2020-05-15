import React from "react";
import "./cart-dropdown.styles.scss";

//  Import components
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

// import redux utils
import { connect } from "react-redux";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => {
  return {
    cartItems: cartItems,
  };
};

export default connect(mapStateToProps)(CartDropdown);
