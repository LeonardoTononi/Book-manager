import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Homepage from './pages/Homepage/homepage.component'
import AddBook from './components/Add-book/add-book.component'
import BooksLibrary from './pages/Books-library/books-library.component'
import Navbar from './components/Navbar/navbar.component'

class App extends Component  {  
  constructor(props) {
    super(props);

    this.state = {
      books: [
        { title: 'Harry Potter', author: 'JK Rowling', note: 'I love it', id: 1 },
        { title: 'The lord of the rings', author: 'J.R.R Tolkien', note: 'The bestseller of the century!', id: 2 },
        { title: 'Minimalism', author: 'Jon Doe', note: 'Less is better', id: 3 },
      ]
    }
  }

  deleteBook = (id) => {
    let books = this.state.books.filter(book => {
      return book.id !== id
    })
    this.setState({
      books
    })
  }

  addBook = (book) => {
    book.id = Math.random();
    let books = [...this.state.books, book];
    this.setState({
      books
    })
  }

  render() {
    return (
     <BrowserRouter>
       <div className="container">
          <Navbar />
          <Route exact path='/' render={() => <Homepage addBook={this.addBook} />}  />
          <Route path='/add-new-book' render={() => <AddBook addBook={this.addBook} />}  />
          <Route path='/books-list' render={() => <BooksLibrary books={this.state.books} deleteBook={this.deleteBook} />} />
       </div>
     </BrowserRouter>
    );
  }
  
}

export default App;
