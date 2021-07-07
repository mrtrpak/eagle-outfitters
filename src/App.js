import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import { auth, createUserProfileDocument } from './firebase/firebase.utils.js';

import './App.css';

import Header from './components/header/header.component.jsx'
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx';
import signInAndSignUpPage from './pages/signIn-signUp/signIn-signUp.component.jsx';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  };

  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user);

      console.log(user);
    });
  };

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  };

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUserd} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path='/signIn' component={signInAndSignUpPage} />
        </Switch>
      </div>
    );
  };
};

export default App;