import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addBook } from '../../redux/book/book.actions'
import { Redirect } from 'react-router-dom'

import './add-book.styles.scss'

import noImage from '../../assets/no-image.png'

import FormInput from '../Form-input/form-input.component'
import CustomButton from '../CustomButton/custom-button.component'
import Axios from 'axios';

class AddBook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      bookToAdd: null,
      title: '',
      author: null,
      note: null,
      rate: null,
      image: null,
      inputIsActive: false
    }
  }

  /* handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  } */

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addBook(this.state.bookToAdd[0]);
    this.setState({ title: '' })
    e.target.reset();
  }

  handleSearch = (e) => {
    e.persist();
    // Hide dropdown search input
    if (e.target.value === "") {
      this.setState({ inputIsActive: false });
    }
    else {
      const input = e.target.value;
      this.setState({ inputIsActive: !false, title: input });
      const title = input.replace(' ', '+');
      const googleAPIkey = 'AIzaSyAF3m0FTGMZQaARMuDp8LhWcSNa6FC_QN4';
      const req = `https://www.googleapis.com/books/v1/volumes?q=${title}&key=${googleAPIkey}`;
      Axios.get(req)
        .then(res => {
          const items = res.data.items;
          const filteredItems = items.filter(item => item.volumeInfo.language === "en")
          this.setState({
            books: filteredItems
          })
        })
    }
  }

  handleData = (e) => {
    e.persist();
    const bookToAdd = this.state.books.filter(book => {
      return book.id === e.target.dataset.id
    })
    this.setState({
      bookToAdd,
      inputIsActive: false,
      title: bookToAdd[0].volumeInfo.title
    })
  }


  render() {
    const { auth } = this.props;
    const { books, inputIsActive } = this.state;
    if (!auth.uid) return <Redirect to="/signIn-and-signUp" />

    return (
      <div className="add-book-container" onClick={this.closeDropdown}>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            id="title"
            name="title"
            type="text"
            placeholder="Search a book for title"
            value={this.state.title}
            handleChange={this.handleSearch}
            autoComplete="off"
            required />
          <div className="row">
            <CustomButton>Add book</CustomButton>
          </div>
          {/* {
            (booksIndex !== books.length) ?
              (<div className="success-message">
                <p>Book added to the list!</p>
              </div>)
              : (null)
          } */}
        </form>
        {
          inputIsActive ?
            <div className="search-list">
              {books.map(book => (
                <div className="book" key={book.id} onClick={this.handleData} data-id={book.id}>
                  <div className="book-col">
                    <img src={book.volumeInfo.imageLinks.smallThumbnail ? book.volumeInfo.imageLinks.smallThumbnail : noImage} alt="book cover" />
                  </div>
                  <div className="book-col">
                    <h4 data-id={book.id}>{book.volumeInfo.title}</h4>
                    <h5 data-id={book.id}>{book.volumeInfo.authors}</h5>
                  </div>
                </div>
              ))}
            </div>
            :
            null
        }
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