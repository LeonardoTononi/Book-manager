import React, { Component } from 'react';

import './sign-in.styles.scss'

import FormInput from '../Form-input/form-input.component'
import CustomButton from '../CustomButton/custom-button.component'

import { signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
  }
  
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            handleChange={this.handleChange}
            required />
          <FormInput
            label="Password"
            name="password"
            type="password"
            handleChange={this.handleChange}
            required />
          <CustomButton type="submit">Login</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
        </form>
      </div>
    ) 
  }
}

export default SignIn