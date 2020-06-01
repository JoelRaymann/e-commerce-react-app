import React from "react";
import "./collections-overview.styles.scss";

// import components
import CollectionPreview from "../../components/collection-preview/collection-preview";

// import redux and its utils
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopCollectionPreview } from "../../redux/shop/shop.selectors";

const CollectionsOverview = ({ shopItems }) => {
  return (
    <div className="collections-overview">
      {shopItems.map(({ id, ...otherCollectionProps }) => (
        <CollectionPreview
          key={id}
          previewAmount={4}
          {...otherCollectionProps}
        />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  shopItems: selectShopCollectionPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
