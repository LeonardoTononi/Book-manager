import React, { Component } from 'react';

import './sign-in.styles.scss'

import Button from '../Button/button.component'

class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: ''
    }
}

  render() {
    return (
      <div className="sign-in">
        <h1>Login</h1>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" className />
          <label htmlFor="password">Password</label>
          <input type="password" id="password" />
          <Button props="Login"/>
        </form>
      </div>
    ) 
  }
}

export default SignIn