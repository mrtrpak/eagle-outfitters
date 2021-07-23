import React from 'react';
import { connect } from 'react-redux';

import './collection.styles.scss';

import { selectCollection } from '../../redux/shop/shop.selectors.js';
import CollectionItem from '../../components/collection-item/collection-item.component.jsx';

const CollectionPage = ({ collection }) => {
  console.log("test", collection);
  // const { title, items } = collections;

  return (
    <div className="collection-page">
      <h2 className="title">Collection Page</h2>
      <div className="items">
        {/* {
          items.map(item => (<CollectionItem key={item.id} item={item} />))
        } */}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);