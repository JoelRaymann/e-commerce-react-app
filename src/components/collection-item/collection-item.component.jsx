import React from "react";
import "./collection-item.styles.scss";

// Import components
import CustomButton from "../custom-button/custom-button.component";

// Import redux utils
import { connect } from "react-redux";

// Import actions
import { addCartItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addCartItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <div className="collection-item">
      <div
        className="collection-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="collection-name">{name}</span>
        <span className="collection-price">{price}</span>
      </div>
      <CustomButton onClick={() => addCartItem(item)} inverted={true}>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addCartItem: (cartItem) => dispatch(addCartItem(cartItem)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
