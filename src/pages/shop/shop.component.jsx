import React from "react";
import { Route } from "react-router-dom";
import "./shop.styles.scss";

// import components
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

import {
  firestore,
  convertCollectionSnapshotToMap,
} from "../../firebase/firebase.utils";

// import redux utils
import { connect } from "react-redux";
import { updateShopItems } from "../../redux/shop/shop.actions";

class ShopPage extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const { updateShopItems } = this.props;
    const collectionRef = firestore.collection("collections");

    collectionRef.onSnapshot(async (snapshot) => {
      const collectionsMap = convertCollectionSnapshotToMap(snapshot);
      // updating the loaded shopitems
      updateShopItems(collectionsMap);
    });
  }

  render() {
    const { match } = this.props;
    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
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
