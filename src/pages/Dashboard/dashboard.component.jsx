import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import CustomButton from '../../components/CustomButton/custom-button.component'
import ReadingChallenge from '../../components/Reading-challenge/reading-challenge.component'


import './dashboard.styles.scss'

class Dashboard extends Component {

  render() {
    const { books } = this.props;
    const { auth } = this.props
    return (
      <div className="dashboard">
        <div>
          {
            auth.uid ?
              <h1 className="welcome-title">{`Welcome ${auth.displayName}`}</h1>
              :
              <div>
                <h1 className="welcome-title">{`You need to login or register before!`}</h1>
                <Link to="/signIn-and-signUp"> <CustomButton className="log-button custom-button">Login / Register</CustomButton> </Link>
              </div>
          }
        </div>
        {
          auth.uid ?
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

            :
            null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    books: state.books
  }
}

export default connect(mapStateToProps)(Dashboard)
