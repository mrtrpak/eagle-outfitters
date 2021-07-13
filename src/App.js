import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';
import { setCurrentUser } from './redux/user/user.actions.js';

import './App.css';

import Header from './components/header/header.component.jsx'
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import signInAndSignUpPage from './pages/signIn-signUp/signIn-signUp.component.jsx';

class App extends Component {

  unsubscribeFromAuth = null

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser({ userAuth });
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  };

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signIn' component={signInAndSignUpPage} />
        </Switch>
      </div>
    );
  };
};

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);