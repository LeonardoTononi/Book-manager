import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addBook } from '../../redux/book/book.actions'
import { Redirect } from 'react-router-dom'

import './add-book.styles.scss'


import BoyImage from '../../assets/boy.svg'
import GirlImage from '../../assets/girl.svg'

import FormInput from '../Form-input/form-input.component'
import CustomButton from '../CustomButton/custom-button.component'

class AddBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      author: null,
      note: null,
      rate: null,
      state: null
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBook(this.state);
    e.target.reset();
  }



  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to="/signIn-and-signUp" />
    return (
      <div className="form-container">
        <h2>Add a new book</h2>
        {
          (this.state.isSubmitted === true) ?
            (<div className="success-message">
              <p>Book added to the list!</p>
            </div>)
            : (null)
        }
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Title"
            id="title"
            name="title"
            type="text"
            handleChange={this.handleChange}
            required />
          <FormInput
            label="Author"
            id="author"
            name="author"
            type="text"
            handleChange={this.handleChange}
            required />
          <div className="row">
            <label>State</label>
            <select onChange={this.handleChange} id="state">
              <option name="choose" value="choose">Did you already read it?</option>
              <option name="wantRead" value="Want to read"> Want to Read</option>
              <option name="reading" value="Reading"> Reading</option>
              <option name="read" value="Read">Read</option>
            </select>
          </div>
          <FormInput
            label="Rate"
            id="rate"
            name="rate"
            type="number"
            min="1"
            max="5"
            handleChange={this.handleChange}
            required />
          <FormInput
            label="Notes about the book"
            id="note"
            name="note"
            type="text"
            handleChange={this.handleChange}
            isTextArea
          />
          <div className="row">
            <CustomButton>Add book</CustomButton>
          </div>
        </form>
        <div className="imageBoy">
          <img src={BoyImage} alt="" />
        </div>
        <div className="imageGirl">
          <img src={GirlImage} alt="" />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addBook: (book) => dispatch(addBook(book))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBook)