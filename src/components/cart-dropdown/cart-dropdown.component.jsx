import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';

import './cart-dropdown.styles.scss';

import { selectCartItems } from '../../redux/cart/cart.selectors.js';
import { toggleCartHidden } from '../../redux/cart/cart.actions.js';
import CustomButton from '../custom-button/custom-button.component.jsx';
import StripeButton from '../stripe-button/stripe-button.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';

const CartDropdown = ({ cartItems, history, dispatch }) => (
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
    <CustomButton onClick={() => {
      history.push("/checkout");
      dispatch(toggleCartHidden());
    }}>
      GO TO CHECKOUT
    </CustomButton>
    <StripeButton />
  </div>
);

const mapStateToProps =  createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

// using with router so component has access to history