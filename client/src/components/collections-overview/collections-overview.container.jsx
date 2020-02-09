import { connect } from 'react-redux';

import { compose } from 'redux';

import { createStructuredSelector } from 'reselect';

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors';

import WithSpinner from '../with_spinner/with-spinner.component';

import CollectionsOverview from '../collections-overview/collections-overview.component';

const mapStateToProps = createStructuredSelector({
	isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
	connect(mapStateToProps),
	WithSpinner
)(CollectionsOverview);

export default CollectionsOverviewContainer;
