import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import "./shop.styles.scss";

// import components
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

// import redux actions
import { fetchShopItemsStart } from "../../redux/shop/shop.actions";

/**
 * React Functional Component to display the shop page
 * of our application.
 *
 * @param {React.Props} props - The properities of Shop Page.
 * Currently takes no props
 */
const ShopPage = (props) => {
  // Get the props here
  const { fetchShopItemsStart, match } = props;

  useEffect(() => {
    fetchShopItemsStart();
  }, [fetchShopItemsStart]);

  // Render
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionsOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchShopItemsStart: () => dispatch(fetchShopItemsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
