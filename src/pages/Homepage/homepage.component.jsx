import React from 'react'
import { Link } from 'react-router-dom'

import CustomButton from '../../components/CustomButton/custom-button.component'

import './homepage.styles.scss'

const Homepage = ({ addBook }) => {
  return (
    <div className="homepage">
      <h1 className="welcome-title">Welcome ,</h1>
      <p className="actions">What do you want do?</p> 
      <div className="buttons-container">
        <Link to="/add-new-book"><CustomButton>Add a new book</CustomButton></Link>
        <Link to="/books-list"><CustomButton>My books list</CustomButton></Link>
        <CustomButton>My profile</CustomButton>        
      </div>
    </div>
  )
}

export default Homepage