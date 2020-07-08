import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import './book-details.style.scss'

import CustomButton from '../CustomButton/custom-button.component'

const BookDetails = (props) => {

  if (props.books) {
    const book = props.books.filter(book => book.id === props.match.params.id)
    console.log(book)
    if (book) {
      const bInfo = book[0].volumeInfo;
      return (
        <div className="book-details">
          <Link to="/my-books">
            <div className="close-window"><i className="fas fa-times"></i></div>
          </Link>
          <h1>{bInfo.title}</h1>
          <div className="grid">
            <div className="col">
              <img src={bInfo.imageLinks.thumbnail} alt="cover book" />
            </div>
            <div className="col details">
              <h2>by {bInfo.authors}</h2>
              <p>Page: {bInfo.pageCount}</p>
              <p>Published in {bInfo.publishedDate}</p>
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
          <h1>Sorry, We can't find that book</h1>
        </div>
      )
    }
  } else {
    return (
      <div className="book-details">
        <h1>Sorry, There is a problem with you internet provider!</h1>
      </div>
    )
  }


}

const mapStateToProps = (state) => {
  const books = state.firestore.ordered.books;
  return {
    books
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'books' }
  ])
)(BookDetails)