import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import './sign-up.styles.scss'

import FormInput from '../Form-input/form-input.component'
import CustomButton from '../CustomButton/custom-button.component'
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

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

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }

    try { 
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName })

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      })

      setTimeout(() => {
        this.props.history.push('/');
      }, 500);

    } catch (error){
        console.log(error)
    }
  }


  handleChange = event => {
    const { name, value } = event.target;

    this.setState({[name]: value});
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
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
          <CustomButton type="submit">Register</CustomButton>
        </form>
      </div>
    )
  }
}

export default withRouter(SignUp)