import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import './sign-in-and-sign-up.styles.scss'

import SignIn from '../../components/Sign-in/sign-in.component'
import SignUp from '../../components/Sign-up/sign-up.component'

const SignInAndSignUp = (props) => {
  const { auth } = props;
  if (auth.uid) return <Redirect to="/" />
  return (
    <div className="sign-container">
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(SignInAndSignUp)