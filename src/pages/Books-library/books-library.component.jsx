import React from 'react';

import './books-library.styles.scss'

import BooksList from '../../components/Books-list/books-list.component'

const BooksLibrary = ({ books, deleteBook }) => {
  return (
    <div className="books-library">
      <BooksList books={books} deleteBook={deleteBook}/>
    </div>
  )
}

export default BooksLibrary