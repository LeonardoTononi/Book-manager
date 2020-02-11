import React, { Component } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase';
import { deleteBook } from '../../redux/book/book.actions';

import AddBook from '../Add-book/add-book.component';
import ErrorBoundary from '../ErrorBoundary/errorBoundary';

import noImage from '../../assets/no-image.png';

import './my-books.styles.scss';

class MyBooks extends Component {
  render() {
    const { books, currentUser, deleteBook } = this.props;

    /* if (books[0] === undefined) {
      return (
        <div className='list-container'>
          <h2>My Books</h2>
          <AddBook />
          <h1 className='no-book-placeholder'>
            No books present in the shelf...
          </h1>
        </div>
      );
    } */

    const books_th = books.map(book => {
      return (
        <tr key={book.id} className='rows'>
          <th className='cover-book'>
            <img
              src={
                book.volumeInfo.imageLinks.smallThumbnail
                  ? book.volumeInfo.imageLinks.smallThumbnail
                  : noImage
              }
              alt='book cover'
            />
          </th>
          <th className='title'>
            <Link to={`/my-books/${book.id}`}>{book.volumeInfo.title} </Link>
          </th>
          <th>{book.volumeInfo.authors}</th>
          <th className='actions-row' id={book.id}>
            <button
              onClick={() => {
                deleteBook(book.id);
              }}>
              <i className='far fa-trash-alt'></i>
            </button>
          </th>
        </tr>
      );
    });

    /*  const deleteConfirm = bookID => {
      deleteBook(bookID);
      console.log(bookID);
      if (window.confirm(`Are you sure?`)) {
        deleteBook(bookID);
      } else {
        return;
      }
    }; */

    return (
      <div>
        <div className='list-container'>
          <h2>My Books</h2>
          <AddBook />
          <table>
            <tbody>
              <tr className='table-title'>
                <th></th>
                <th>Title</th>
                <th>Author</th>
                <th></th>
              </tr>
              {books_th}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    books: state.shelf.books,
    currentUser: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteBook: id => dispatch(deleteBook(id))
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ) /* ,
  firestoreConnect([
    {
      collection: 'books'
    }
  ]) */
)(MyBooks);
