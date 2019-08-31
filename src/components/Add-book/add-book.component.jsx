import React, { Component } from 'react';

import './add-book.styles.scss'

import FormInput from '../Form-input/form-input.component'
import CustomButton from '../CustomButton/custom-button.component'

class AddBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: null,
      author: null,
      note: null,
      submitted: false
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
    this.setState({
      submitted: true
    })
    setTimeout(() => {
      this.setState({
        submitted: false
      })
   }, 2000)
    e.target.reset();
  }

  render() {
    return (
      <div className="form-container">
        <h2>Add a new book</h2>
        {
          (this.state.submitted === true) ?
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
            type="title"
            handleChange={this.handleChange}
            required />
          <FormInput
            label="Author"
            id="author"
            name="author"
            type="author"
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
      </div>
    )
  }
}

export default AddBook