import React from "react";
import { Route } from "react-router-dom";
import "./shop.styles.scss";

// import components
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

// import redux utils
import { connect } from "react-redux";
import { updateShopItems } from "../../redux/shop/shop.actions";

// Set up the spinner for the CollectionsOverview Component
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);

// Set up the spinner for the CollectionPage Component
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  // This is a old method. In recent react, if we init a var name state
  // at the start of a class component, react itself will call super() and
  // stuffs
  // constructor(props) {
  //   super();
  //   this.state = {
  //     loading: true
  //   };
  //   this.props = props;
  // }

  // short-hand method
  state = {
    loading: true,
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateShopItems } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);

      // updating the loaded shopitems
      updateShopItems(collectionsMap);

      // set the loading as false mentioning the completion.
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateShopItems: (shopItems) => dispatch(updateShopItems(shopItems)),
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
