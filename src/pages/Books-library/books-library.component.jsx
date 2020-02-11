import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import './books-library.styles.scss';

import Title from '../../components/Title/title.component';
import MyBooks from '../../components/My-books/my-books.component';

const BooksLibrary = props => {
  const { auth, books, deleteBook } = props;
  if (!auth.uid) return <Redirect to='/signIn-and-signUp' />;

  return (
    <>
      <Title />
      <div className='books-library'>
        <MyBooks books={books} deleteBook={deleteBook} />
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    books: state.shelf.books
  };
};

export default connect(mapStateToProps)(BooksLibrary);
