import React from 'react'

import './sign-in-and-sign-up.styles.scss'

import SignIn from '../../components/Sign-in/sign-in.component'
import SignUp from '../../components/Sign-up/sign-up.component'

const SignInAndSignUp = () => {
  return (
    <div className="sign-container">
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  )
}

export default SignInAndSignUp