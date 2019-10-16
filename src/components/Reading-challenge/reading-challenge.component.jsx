import React, { Component } from 'react';

import './reading-challenge.styles.scss'
import CustomButton from '../CustomButton/custom-button.component'
import FormInput from '../Form-input/form-input.component'
import readingChallengeIMG from '../../assets/reading-challenge.png'

class ReadingChallenge extends Component {
  state = {
    challenge: null,
    set: false
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      set: !false
    })
  }


  render() {
    const currentYear = new Date().getFullYear();
    const { challenge, set } = this.state
    return (
      <div className="reading-challenge">
        <h1 className="title">
          {currentYear} Reading Challenge
      </h1>
        <div className="grid">
          <div className="col">
            <img src={readingChallengeIMG} alt="reading challenge img" />
          </div>
          <div className="col">
            <p>I want read</p>

            {
              set ?
                (
                  <div>
                    <p>{challenge}</p>
                    <p>books this year.</p>
                    <CustomButton>Edit Challenge</CustomButton>
                  </div>
                )
                :
                (
                  <form>
                    <FormInput type="number" id="challenge" name="challenge" min="1" handleChange={this.handleChange} />
                    <p>books this year.</p>
                    {
                      challenge === null ?
                        <CustomButton onClick={() => alert("You need to set a challenge before!")}>Set Challenge</CustomButton>
                        :
                        <CustomButton onClick={this.handleSubmit}>Set Challenge</CustomButton>

                    }
                  </form>
                )
            }




          </div>
        </div>
      </div >
    )
  }

}

export default ReadingChallenge