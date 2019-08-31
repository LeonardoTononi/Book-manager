import React, { Component } from 'react';

import './sign-up.styles.scss'

import Button from '../Button/button.component'

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
  render() {
    return (
      <div className="sign-up">
        <h1>Register</h1>
        <form>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username"/>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password"/>
          <label htmlFor="confirmPassword">Confirm password</label>
          <input type="password" id="confirmPassword" name="confirmPassword"/>
          <Button props="Register" />
        </form>
      </div>
    )
  }
}

export default SignUp