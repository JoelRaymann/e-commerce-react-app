import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import "./shop.styles.scss";

// import components
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";

// import redux actions
import { fetchShopItemsStartAsync } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  componentDidMount() {
    const { fetchShopItemsStartAsync } = this.props;
    fetchShopItemsStartAsync();
  }

  render() {
    const { match } = this.props;

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
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchShopItemsStartAsync: () => dispatch(fetchShopItemsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
