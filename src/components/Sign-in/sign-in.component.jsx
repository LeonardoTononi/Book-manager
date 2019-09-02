import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './sign-in.styles.scss'

import FormInput from '../Form-input/form-input.component'
import CustomButton from '../CustomButton/custom-button.component'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils'

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }
  
  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' })

      setTimeout(() => {
        this.props.history.push('/');
      }, 500);

    } catch (error) {
      console.log(error);
    }
  }
  
  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="sign-in">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={email}
            handleChange={this.handleChange}
            required />
          <FormInput
            label="Password"
            name="password"
            type="password"
            value={password}
            handleChange={this.handleChange}
            required />
          <CustomButton type="submit">Login</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
        </form>
      </div>
    ) 
  }
}

export default withRouter(SignIn)