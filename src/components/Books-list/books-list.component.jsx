import React from 'react';

import './books-list.styles.scss'

const BooksList = ({ books, deleteBook }) => {
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
        <tbody>
          <tr className="table-title">
            <th>Title</th>
            <th>Author</th>
            <th>Note</th>
          </tr>
          {books.map(book => {
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
          })}
        </tbody>
      </div>
    )
  }

export default BooksList