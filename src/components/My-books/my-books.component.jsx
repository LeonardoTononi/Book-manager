import React from 'react';
import { Link } from 'react-router-dom';

import './my-books.styles.scss'

const MyBooks = ({ books, deleteBook }) => {
  
  const books_th = books.map(book => {
    return (
      <tr key={book.id}>
        <th><Link to={`/my-books/${book.id}`}>{book.title}</Link></th>
        <th>{book.author}</th>
        <th>{book.note}</th>
        <th>✭✭✭✭✭</th>
        <th className="actions-row">
          <button onClick={() => {
            deleteConfirm(book.id)
          }}><i className="far fa-trash-alt"></i></button>
          <button><i className="far fa-edit"></i></button>
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
        <h2>My Books</h2>
        <table>
          <tbody>
            <tr className="table-title">
              <th>Title</th>
              <th>Author</th>
              <th>Note</th>
              <th>Rating</th>
            </tr>
            {books_th}
          </tbody>
        </table>
      </div>
    )
  }

export default MyBooks