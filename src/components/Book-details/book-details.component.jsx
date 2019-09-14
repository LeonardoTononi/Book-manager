import React from 'react'
import { Link } from 'react-router-dom';

import './book-details.style.scss'
import HarryPotterBook from '../Reading-challenge/harrypotter.jpeg'

import CustomButton from '../CustomButton/custom-button.component'

const BookDetails = ({books, ...routerProps}) => {

  const id = parseInt(routerProps.match.params.id);
  
  const book = books.filter(book => book.id === id)
  return (
    <div className="book-details">
      <Link to="/my-books">
         <div className="close-window"><i className="fas fa-times"></i></div>
      </Link>
        <h1>{book[0].title}</h1>
        <div className="grid">
          <div className="col">
            <img src={HarryPotterBook} alt="harrypotter book" />
          </div>
          <div className="col details">
            <h2>by {book[0].author}</h2>
            <p>State: Currently Reading</p>
            <p>Notes: {book[0].note}</p>
            <p>4,7 /5 on 2345 reviews</p>
            <p><i className="fas fa-share-alt"></i> Share with a friend!</p>
          </div>
      </div>
      <div className="amazon-btn">
         <CustomButton>Buy on Amazon</CustomButton>
      </div>
      </div>
  )
}

export default BookDetails;