import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { signUp } from '../../redux/user/user.actions'

import './sign-up.styles.scss'

import FormInput from '../Form-input/form-input.component'
import CustomButton from '../CustomButton/custom-button.component'

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit = async event => {
    event.preventDefault();
    this.props.signUp(this.state)
  }


  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    const { currentUser } = this.props;
    return (
      <div className="sign-up">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Username"
            type="text"
            name="displayName"
            value={displayName}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Confirm password"
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            handleChange={this.handleChange}
            required
          />
          <div className="error-login">
            {currentUser ? <p>{currentUser}, be sure to digit the correct E-mail and password.</p> : null}
          </div>
          <CustomButton type="submit">Register</CustomButton>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    currentUser: state.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp))