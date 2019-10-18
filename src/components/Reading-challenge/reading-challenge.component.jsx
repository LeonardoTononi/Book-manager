import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import { setChallenge } from '../../redux/challenge/challenge.actions'

import { getFirestore } from 'redux-firestore'

import './reading-challenge.styles.scss'
import CustomButton from '../CustomButton/custom-button.component'
import FormInput from '../Form-input/form-input.component'
import readingChallengeIMG from '../../assets/reading-challenge.png'

class ReadingChallenge extends Component {
  constructor() {
    super();

    this.state = {
      nBook: 0
    }
  }


  handleChange = (e) => {
    this.setState({
      nBook: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setChallenge(this.state.nBook);
  }

  handleEdit = (e) => {
    e.preventDefault();
    this.setState({
      nBook: 0
    })
  }

  render() {
    const currentYear = new Date().getFullYear();

    const { nBook } = this.state;
    const { booksChallenge, currentUser } = this.props;

    const id = currentUser.uid;

    const challenge = getFirestore().collection('booksChallenge').doc(id).get().then(doc => {
      return doc.data()
    })
    console.log(challenge)
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
            <p>{challenge.number}</p>
            {
              challenge.hiddenInput ?
                (
                  <div>
                    <p>{challenge.number}</p>
                    <p>books this year.</p>
                    <CustomButton onClick={this.handleSubmit}>Edit Challenge</CustomButton>
                  </div>
                )

                :
                (
                  <form>
                    <FormInput type="number" id="challenge" name="challenge" min="1" handleChange={this.handleChange} />
                    <p>books this year.</p>
                    {
                      nBook === 0 ?
                        <CustomButton onClick={() => alert("You need to set a challenge before!")}>Set Challenge</CustomButton>
                        :
                        <CustomButton onClick={this.handleSubmit}>Set Challenge</CustomButton>
                    }
                  </form>
                )
            }
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    booksChallenge: state.firestore.data.booksChallenge || state.challenge,
    currentUser: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setChallenge: (n) => dispatch(setChallenge(n))
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([
    {
      collection: 'booksChallenge'
    }
  ])
)(ReadingChallenge)