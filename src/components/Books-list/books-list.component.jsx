import React from 'react';

import './books-list.styles.scss'

const BooksList = ({books, deleteBook}) => {
  const bookRow = books.map(book => {
    return (
      <tr key={book.id}>
        <th>{book.title}</th>
        <th>{book.author}</th>
        <th>{book.note}</th>
        <th>
          <button onClick={() => deleteBook(book.id)}>X</button>
        </th>
      </tr>
    )
  })

  return (
    <div className="list-container">
      <h2>Book List</h2>
      <tbody>
        <tr className="table-title">
          <th>Title</th>
          <th>Author</th>
          <th>Note</th>
        </tr>
        {bookRow}
      </tbody>
    </div>
  )
}

export default BooksList