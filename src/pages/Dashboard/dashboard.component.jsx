import React from 'react'
import { Link } from 'react-router-dom'

import CustomButton from '../../components/CustomButton/custom-button.component'
import ReadingChallenge from '../../components/Reading-challenge/reading-challenge.component'


import './dashboard.styles.scss'

const Dashboard = ({ addBook, currentUser }) => {
  return (
    <div className="dashboard">
      <div>
        {
          currentUser ?
            <h1 className="welcome-title">{`Welcome ${currentUser.displayName}`}</h1>
            :
            <div>
              <h1 className="welcome-title">{`You need to login or register before!`}</h1>
              <Link to="/signIn-and-signUp"> <CustomButton  className="log-button custom-button">Login / Register</CustomButton> </Link>
            </div>
        }
       </div>
      {
        currentUser ?
          <div className="dashboard-container">
            <div className="actions-container">
              <p className="actions">What do you want to do?</p>
              <div className="buttons-container">
                <Link to="/add-new-book"><CustomButton>Add a new book</CustomButton></Link>
                <Link to="/books-list"><CustomButton>My Books</CustomButton></Link>
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

export default Dashboard