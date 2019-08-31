import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { auth } from './firebase/firebase.utils'

import './App.css';

import Homepage from './pages/Homepage/homepage.component'
import AddBook from './components/Add-book/add-book.component'
import BooksLibrary from './pages/Books-library/books-library.component'
import Navbar from './components/Navbar/navbar.component'
import SignInAndSignUp from './pages/Sign-in-and-sign-up/sign-in-and-sign-up.component';

class App extends Component  {  
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
      books: [
        { title: 'Harry Potter', author: 'JK Rowling', note: 'I love it', id: 1 },
        { title: 'The lord of the rings', author: 'J.R.R Tolkien', note: 'The bestseller of the century!', id: 2 },
        { title: 'Minimalism', author: 'Jon Doe', note: 'Less is better', id: 3 },
      ]
    }
  }

  unsuscribeFromAuth = null;

  componentDidMount() {
  this.unsuscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user)
    })
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth();
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
          <Navbar currentUser={this.state.currentUser} />
          <Route exact path='/' render={() => <Homepage addBook={this.addBook} />} />
                <Route path='/add-new-book' render={() => <AddBook addBook={this.addBook} />} />
                <Route path='/books-list' render={() => <BooksLibrary books={this.state.books} deleteBook={this.deleteBook} />} />
                <Route path='/signIn-and-signUp' render={() => <SignInAndSignUp />} />
       </div>
     </BrowserRouter>
    );
  }
  
}

export default App;
