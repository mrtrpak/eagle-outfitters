import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils.js';

import { ReactComponent as Logo } from '../../assets/eagle.svg';

import './header.styles.scss';

import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/contact">CONTACT</Link>
      {
        currentUser ?
        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
        :
        <Link className="option" to="/signIn">SIGN IN</Link>
      }
      <CartIcon />
    </div>
    <CartDropdown />
  </div>
);

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);