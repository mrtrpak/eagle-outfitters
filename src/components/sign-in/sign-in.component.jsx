import React, { Component } from 'react';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils.js';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component.jsx';
import CustomButton from '../custom-button/custom-button.component.jsx';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  };

  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" })
    } catch (error) {
      console.log(error);
    };
    
    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    const { handleChange, handleSubmit } = this;

    return (
      <div className="sign-in">
        <h2>I Have an Account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={handleSubmit}>
          <FormInput 
            type="email" 
            name="email" 
            value={email}
            handleChange={handleChange} 
            placeholder="Email"
            required 
          />
          <FormInput 
            type="password" 
            name="password" 
            value={password}
            handleChange={handleChange} 
            placeholder="Password"
            required 
          />
          <div className="buttons">
            <CustomButton type="submit">
              sign in           
            </CustomButton>
            <CustomButton 
              onClick={signInWithGoogle} 
              isGoogleSignIn
              type="button"
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  };
};

export default SignIn;