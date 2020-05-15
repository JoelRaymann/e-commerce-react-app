import React from "react";
import "./collection-preview.styles.scss";

// import components
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items, previewAmount }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, index) => index < previewAmount)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
