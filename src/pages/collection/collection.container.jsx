import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectIsShopItemsLoaded } from "../../redux/shop/shop.selectors";
import CollectionPage from "./collection.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsShopItemsLoaded(state),
});

const CollectionPageContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionPage);

export default CollectionPageContainer;
