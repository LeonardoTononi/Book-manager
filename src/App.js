import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Dashboard from './pages/Dashboard/dashboard.component'
import BooksLibrary from './pages/Books-library/books-library.component'
import Navbar from './components/Navbar/navbar.component'
import Footer from './components/Footer/footer.component'
import SignInAndSignUp from './pages/Sign-in-and-sign-up/sign-in-and-sign-up.component';
import BookDetails from './components/Book-details/book-details.component'

class App extends Component  {  

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
          <Switch>
            <Route exact path='/' render={(props) => <Dashboard {...props}  />} />
            <Route exact path='/my-books' render={(props) => <BooksLibrary {...props} deleteBook={this.deleteBook} />} />
            <Route path='/my-books/:id' component={BookDetails}/>
            <Route path='/signIn-and-signUp' render={() => <SignInAndSignUp />} />
          </Switch>
        </div>
        <Footer />
     </BrowserRouter>
    );
  }
}

export default App;
