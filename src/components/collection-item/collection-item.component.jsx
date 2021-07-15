import React from 'react';
import { connect } from 'react-redux';

import './collection-item.styles.scss';

import CustomButton from '../custom-button/custom-button.component.jsx';
import { addItem } from '../../redux/cart/cart.actions.js';

const CollectionItem = ({ id, name, price, imageUrl, addItem }) => (
  <div className="collection-item">
    <div className="image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">${price}</span>
    </div>
    <CustomButton inverted>
      ADD TO CART
    </CustomButton>
  </div>
);

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(
  null, 
  mapDispatchToProps
)(CollectionItem);