import React, { Component } from 'react';

import './add-book.styles.scss'

class AddBook extends Component {
  constructor() {
    super();

    this.state = {
      title: null,
      author: null,
      note: null
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
    return (
      <div className="form-container">
        <h2>Add Book</h2>
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
            <button type="submit" className="button-submit">Submit</button>
          </div>
        </form>
      </div>
    )
  }
}

export default AddBook