import React, { Component } from 'react';

import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component.jsx';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  };

  handleSubmit = event => {
    event.preventDefault();
    
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
            placeholder="EMAIL"
            required 
          />
          <FormInput 
            type="password" 
            name="password" 
            value={password}
            handleChange={handleChange} 
            placeholder="PASSWORD"
            required 
          />

          <input type="submit" value="submit form" />
        </form>
      </div>
    );
  };
};

export default SignIn;