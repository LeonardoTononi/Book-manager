import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import ReadingChallenge from '../../components/Reading-challenge/reading-challenge.component'

import './dashboard.styles.scss'

const Dashboard = (props) => {

  const { auth, profile } = props;
  if (!auth.uid) return <Redirect to="/signIn-and-signUp" />

  return (
    <div className="dashboard">
      <div>
        <h1 className="welcome-title">{`Welcome ${profile.displayName}`}</h1>
      </div>
      <div className="dashboard-container">
        <div className="feed">
        </div>
        <div className="challenge-container">
          <ReadingChallenge />
        </div>
      </div>

    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    books: state.books,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Dashboard)
