import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './books-library.styles.scss'

import MyBooks from '../../components/My-books/my-books.component'
import CustomButton from '../../components/CustomButton/custom-button.component'

const BooksLibrary = (props) => {
  const pStyle = {
    textAlign: 'center'
  }
  const { auth } = props;
  const { books } = props;
  const { deleteBook } = props;

  return (
    <div className="books-library">
      {
        auth.uid ?
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

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    books: state.firestore.ordered.books || state.books.books
  }
}

export default connect(mapStateToProps)(BooksLibrary)