import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import CustomButton from '../../components/CustomButton/custom-button.component'
import ReadingChallenge from '../../components/Reading-challenge/reading-challenge.component'


import './dashboard.styles.scss'

class Dashboard extends Component {

  render() {

    const { auth, profile } = this.props;
    if (!auth.uid) return <Redirect to="/signIn-and-signUp" />

    return (
      <div className="dashboard">
        <div>
          <h1 className="welcome-title">{`Welcome ${profile.displayName}`}</h1>
        </div>
        <div className="dashboard-container">
          <div className="actions-container">
            <p className="actions">What do you want to do?</p>
            <div className="buttons-container">
              <Link to="/add-new-book"><CustomButton>Add a new book</CustomButton></Link>
              <Link to="/my-books"><CustomButton>My Books</CustomButton></Link>
              <CustomButton>My profile</CustomButton>
            </div>
          </div>
          <div className="feed"></div>
          <div className="challenge-container">
            <ReadingChallenge />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    books: state.books,
    profile: state.firebase.profile
  }
}

export default connect(mapStateToProps)(Dashboard)
