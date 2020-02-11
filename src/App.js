import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import BooksLibrary from './pages/Books-library/books-library.component';
import Navbar from './components/Navbar/navbar.component';
import Footer from './components/Footer/footer.component';
import SignInAndSignUp from './pages/Sign-in-and-sign-up/sign-in-and-sign-up.component';
import BookDetails from './components/Book-details/book-details.component';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='container'>
          <Navbar />
          <Switch>
            <Route
              exact
              path='/'
              render={props => <BooksLibrary {...props} />}
            />
            <Route
              exact
              path='/my-books'
              render={props => <BooksLibrary {...props} />}
            />
            <Route path='/my-books/:id' component={BookDetails} />
            <Route
              path='/signIn-and-signUp'
              render={() => <SignInAndSignUp />}
            />
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
