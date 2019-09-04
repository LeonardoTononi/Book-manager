import React from 'react'
import { Link } from 'react-router-dom'

import CustomButton from '../../components/CustomButton/custom-button.component'

import './homepage.styles.scss'

const Homepage = ({ addBook, currentUser }) => {
  return (
    <div className="homepage">
      <div>
        {
          currentUser ?
            <h1 className="welcome-title">{`Welcome ${currentUser.displayName},`}</h1>
            :
            <div>
              <h1 className="welcome-title">{`You need to login or register before!`}</h1>
              <Link to="/signIn-and-signUp"> <CustomButton  className="log-button custom-button">Login / Register</CustomButton> </Link>
            </div>
        }
       </div>
      {
        currentUser ?
          <div>
            <p className="actions">What do you want to do?</p> 
            <div className="buttons-container">
              <Link to="/add-new-book"><CustomButton>Add a new book</CustomButton></Link>
              <Link to="/books-list"><CustomButton>My books list</CustomButton></Link>
              <CustomButton>My profile</CustomButton>        
           </div>
          </div>
          :
          null
      }
    </div>
  )
}

export default Homepage