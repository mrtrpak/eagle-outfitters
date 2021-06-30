import React, { Component } from 'react';

import './sign-in.styles.scss';

class SignIn extends Component {
  constructor() {
    super();

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
          <input 
            type="email" 
            name="email" 
            value={email}
            onChange={handleChange} 
            required 
          />
          <label>Email</label>
          <input 
            type="password" 
            name="password" 
            value={password}
            onChange={handleChange} 
            required 
          />
          <label>Password</label>

          <input type="submit" value="submit form" />
        </form>
      </div>
    );
  };
};

export default SignIn;