import React, { Component } from 'react';

import './add-book.styles.scss'

import Button from '../Button/button.component'

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
        <h2>Add Book</h2>
        {
          (this.state.submitted === true) ?
          (<div className="success-message">
          <p>Book added to the list!</p>
          </div>)
            : (null)
        }
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={this.handleChange} />
          </div>
          <div className="row">
            <label htmlFor="author">Author</label>
            <input type="text" id="author" onChange={this.handleChange} />
          </div>
          <div className="row">
            <label htmlFor="note">Note about the book</label>
            <textarea id="note" cols="30" rows="1" onChange={this.handleChange}></textarea>
          </div>
          <div className="row">
            <Button props="Submit"/>
          </div>
        </form>
      </div>
    )
  }
}

export default AddBook