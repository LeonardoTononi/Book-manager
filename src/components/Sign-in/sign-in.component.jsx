import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { signIn } from '../../store/actions/authActions'
import { signInWithProvider } from '../../store/actions/authActions'
import './sign-in.styles.scss'

import FormInput from '../Form-input/form-input.component'
import CustomButton from '../CustomButton/custom-button.component'

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async event => {
    event.preventDefault();
    this.props.signIn(this.state)
    setTimeout(() => this.props.history.push('/'), 1200)
  }

  render() {
    const { authError } = this.props;
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
          <div className="error-login">
            {authError ? <p>{authError}, be sure to digit the correct E-mail and password.</p> : null}
          </div>
          <CustomButton type="submit">Login</CustomButton>
          <CustomButton onClick={this.props.signInWithProvider} isGoogleSignIn>Sign in with Google</CustomButton>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
    signInWithProvider: () => dispatch(signInWithProvider())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn))