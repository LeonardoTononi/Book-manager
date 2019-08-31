import React, { Component } from 'react';

import './sign-up.styles.scss'

import FormInput from '../Form-input/form-input.component'
import CustomButton from '../CustomButton/custom-button.component'

class SignUp extends Component  {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }


  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  render() {
    return (
      <div className="sign-up">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Username"
            type="username"
            name="username"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Email"
            type="email"
            name="email"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Confirm password"
            type="password"
            name="confirmPassword"
            handleChange={this.handleChange}
            required
          />
          <CustomButton>Register</CustomButton>
        </form>
      </div>
    )
  }
}

export default SignUp