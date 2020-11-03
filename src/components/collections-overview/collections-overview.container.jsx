import { connect } from "react-redux";
import { compose } from "redux";
import WithSpinner from "../with-spinner/with-spinner.component";
import collectionsOverview from "./collections-overview.component";

const { createStructuredSelector } = require("reselect");
const {
  selectIsCollectionFetching,
} = require("../../redux/shop/shop.selector");

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(collectionsOverview);

export default CollectionsOverviewContainer;
