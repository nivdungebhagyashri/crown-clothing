import React from 'react';
import {Route} from 'react-router-dom';
import {connect, createStructuredSelector} from 'react-redux';
import {selectCollection} from './../../redux/shop/shop.selectors';
import {CollectionsOverview} from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../../pages/collection/collection.component';

export const ShopPage = ({ match}) => (
        <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route  path={`${match.path}/:categoryID`} component={CollectionPage}/>
        </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollection
})

export default connect(mapStateToProps)(ShopPage);