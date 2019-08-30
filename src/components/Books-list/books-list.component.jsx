import React from 'react';

import './books-list.styles.scss'

const BooksList = ({ books, deleteBook }) => {
  
  const books_th = books.map(book => {
    return (
      <tr key={book.id}>
        <th>{book.title}</th>
        <th>{book.author}</th>
        <th>{book.note}</th>
        <th>
          <button onClick={() => {
            deleteConfirm(book.id)
          }}>X</button>
        </th>
      </tr>
    )
  })

  const deleteConfirm = (bookID) => {
    if (window.confirm('Are you sure?')) {
      deleteBook(bookID);
    } else {
      return
    }
  }

    return (
      <div className="list-container" >
        <h2>Book List</h2>
        <table>
          <tbody>
            <tr className="table-title">
              <th>Title</th>
              <th>Author</th>
              <th>Note</th>
            </tr>
            {books_th}
          </tbody>
        </table>
      </div>
    )
  }

export default BooksList