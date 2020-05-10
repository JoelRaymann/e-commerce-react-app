import React from "react";
import "./collection-item.styles.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div id={id} className="collection-item">
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
    </div>
  );
};

export default CollectionItem;
