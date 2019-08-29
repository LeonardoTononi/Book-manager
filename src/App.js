import React, {Component} from 'react';
import './App.css';

import Navbar from './components/Navbar/navbar.component'
import AddBook from './components/Add-book/add-book.component'
import BooksList from './components/Books-list/books-list.component'

class App extends Component  {
  state = {
    books: [
      { title: 'Harry Potter', author: 'JK Rowling', note: 'I love it', id: 1 },
      { title: 'The lord of the rings', author: 'J.R.R Tolkien', note: 'The bestseller of the century!', id: 2 },
      { title: 'Minimalism', author: 'Jon Doe', note: 'Less is better', id: 3 },
    ] 
  }

  addBook = (book) => {
    book.id = Math.random();
    let books = [...this.state.books, book];
    this.setState({
      books
    })
  }

  deleteBook = (id) => {
    let books = this.state.books.filter(book => {
      return book.id !== id
    })
    this.setState({
      books
    })
  }

  render() {
    return (
      <div className="container">
        <Navbar></Navbar>
        <AddBook addBook={this.addBook}/>
        <BooksList deleteBook={this.deleteBook} books={this.state.books} />
      </div>
    );
  }
  
}

export default App;
