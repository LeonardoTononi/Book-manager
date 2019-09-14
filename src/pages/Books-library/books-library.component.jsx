import React from 'react';
import { Link } from 'react-router-dom'

import './books-library.styles.scss'

import MyBooks from '../../components/My-books/my-books.component'
import CustomButton from '../../components/CustomButton/custom-button.component'

const BooksLibrary = ({ books, deleteBook, currentUser }) => {
  const pStyle = {
    textAlign: 'center'
  }

  return (
    <div className="books-library">
      {
        currentUser ?
          <MyBooks books={books} deleteBook={deleteBook} />
          :
          <div className="list-container">
            <h2 style={pStyle}>You need to login or register before!</h2>
            <Link to="/signIn-and-signUp"> <CustomButton className="log-button custom-button">Login / Register</CustomButton> </Link>
          </div>
      }
    </div>
  )
}

export default BooksLibrary