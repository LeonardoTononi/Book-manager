import React from 'react';

import './reading-challenge.styles.scss'
import CustomButton from '../CustomButton/custom-button.component'
import HarryPotterBook from './harrypotter.jpeg'

const ReadingChallenge = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="reading-challenge">
      <h1 className="title">
        {currentYear} Reading Challenge
      </h1>
      <div className="grid">
        <div className="col">
          <img src={HarryPotterBook} alt="harry potter book" />
        </div>
        <div className="col">
          <p>I want to read</p>
          <input type="number" />
          <p>books in {currentYear}</p>
          <CustomButton>Start Challenge</CustomButton>
        </div>
      </div>
     
    </div>
  )
}

export default ReadingChallenge