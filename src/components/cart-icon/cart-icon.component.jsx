import React from "react";
import "./cart-icon.styles.scss";

// import SVGs
import { ReactComponent as ShoppingIcon } from "../../assets/shopping_bag.svg";

// import redux utils
import { connect } from "react-redux";

// import redux actions
import { toggleCartVisibility } from "../../redux/cart/cart.actions";

const CartIcon = ({ toggleCartVisibility }) => (
  <div className="cart-icon" onClick={toggleCartVisibility}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartVisibility: () => dispatch(toggleCartVisibility()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
