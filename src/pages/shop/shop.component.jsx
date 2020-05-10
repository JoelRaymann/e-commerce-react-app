import React from "react";

// import components
import CollectionPreview from "../../components/collection-preview/collection-preview";

// import TESTING SHOP DATA
import SHOP_DATA from "../../data/shop.data";

/**
 * A ShopPage component to display the shop page
 *
 * @extends React.Component
 */
class ShopPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    // get the collections
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview
            id={id}
            previewAmount={4}
            {...otherCollectionProps}
          />
        ))}
      </div>
    );
  }
}

export default ShopPage;
