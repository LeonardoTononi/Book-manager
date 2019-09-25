import React, { Component } from 'react';
import { compose } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase'

import './my-books.styles.scss'

class MyBooks extends Component {


  render() {
    const { books } = this.props;
    const books_th = books.map(book => {
      return (
        <tr key={book.id}>
          <th><Link to={`/my-books/${book.id}`}>{book.title}</Link></th>
          <th>{book.author}</th>
          <th>{book.note}</th>
          <th>{book.state}</th>
          <th>{book.rate}</th>
          <th className="actions-row" id={book.id}>
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
        console.log()
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
              <th>State</th>
              <th>Rating</th>
            </tr>
            {books_th}
          </tbody>
        </table>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.firestore.ordered.books || state.books.books
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'books' }
  ])
)(MyBooks)