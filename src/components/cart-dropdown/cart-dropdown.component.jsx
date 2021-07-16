import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';
import { selectCartItems } from '../../redux/cart/cart.selectors.js';

const CartDropdown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItems.length ?
        cartItems.map(cartItem =>
          <CartItem key={cartItem.id} item={cartItem} />
        )
        : <span className="empty-message">Your cart is empty</span>
      }
    </div>
    <CustomButton onClick={() => history.push("/checkout")}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps =  createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

// using with router so component has access to history