import React from "react";
import "./collection-preview.styles.scss";

// import components
import CollectionItem from "../collection-item/collection-item.component";

// import routing utils
import { Link } from "react-router-dom";

const CollectionPreview = ({ title, items, previewAmount, routeName }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">
        <Link className="link-title" to={`shop/${routeName}`}>
          {title.toUpperCase()}
        </Link>
      </h1>
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
