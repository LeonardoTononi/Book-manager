import React from 'react';

import './books-library.styles.scss'

import BooksList from '../../components/Books-list/books-list.component'

const BooksLibrary = ({ books, deleteBook, currentUser }) => {
  const pStyle = {
   textAlign: 'center'
 }

  return (
    <div className="books-library">
      {
        currentUser ? 
          <BooksList books={books} deleteBook={deleteBook} /> 
          : 
          <div className="list-container">
            <h2 style={pStyle}>You need to login or register before!</h2>
          </div>
      }
    </div>
  )
}

export default BooksLibrary