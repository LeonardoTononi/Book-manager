import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import './book-details.style.scss'

import CustomButton from '../CustomButton/custom-button.component'

const BookDetails = (props) => {
  const { book } = props;
  if (book) {
    return (
      <div className="book-details">
        <Link to="/my-books">
          <div className="close-window"><i className="fas fa-times"></i></div>
        </Link>
        <h1>{book.title}</h1>
        <div className="grid">
          <div className="col">
            <img alt="harrypotter book" />
          </div>
          <div className="col details">
            <h2>by {book.author}</h2>
            <p>State: {book.state}</p>
            <p>Notes: {book.note}</p>
            <p>{book.rate} /5 on 2345 reviews</p>
            <p><i className="fas fa-share-alt"></i> Share with a friend!</p>
          </div>
        </div>
        <div className="amazon-btn">
          <CustomButton>Buy on Amazon</CustomButton>
        </div>
      </div>
    )
  } else {
    return (
      <div className="book-details">
        <h1>... Loading ...</h1>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const books = state.firestore.data.books;
  const book = books ? books[id] : null
  return {
    book: book
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'books' }
  ])
)(BookDetails)