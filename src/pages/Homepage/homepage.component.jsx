import React from 'react'
import { Link } from 'react-router-dom'

import Button from '../../components/Button/button.component'

import './homepage.styles.scss'

const Homepage = ({ addBook }) => {
  return (
    <div className="homepage">
      <h1 className="welcome-title">Welcome Leonardo,</h1>
      <p className="actions">What do you want do?</p> 
      <div className="buttons-container">
        <Link to="/add-new-book"><Button props="Add a new book" /></Link>
        <Link to="/books-list"><Button props="My books list" /></Link>
        <Button props="My profile" />        
      </div>
    </div>
  )
}

export default Homepage