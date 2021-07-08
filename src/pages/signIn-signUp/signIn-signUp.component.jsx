import React from 'react';

import './signIn-signUp.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component.jsx';
import SignUp from '../../components/sign-up/sign-up.component.jsx';

const signInAndSignUpPage = () => (
  <div className="signIn-signUp">
    <SignIn />
    <SignUp />
  </div>
);

export default signInAndSignUpPage;