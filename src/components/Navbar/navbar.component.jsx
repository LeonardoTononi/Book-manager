import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils'

import './navbar.styles.scss';

class Navbar extends Component {
  constructor() {
    super();

    this.state = {
      isVisible: false
    }
  }

  hideShowClick = () => {
    this.setState({ isVisible: !this.state.isVisible })
  }

  render() {
    return (
      <div className="container-nav">
        <Link to="/">
          <h1 className="logo">Book Manager</h1>
        </Link>
        {
          this.props.currentUser ?
            this.state.isVisible ?
              <div>
                <ul className="navbar">
                  <li><Link to="/">Dashboard</Link></li><li><Link to="/my-books">My Books</Link></li>
                  <li className="logout" onClick={() => auth.signOut()}>
                    <Link to="/signIn-and-signUp">Logout</Link>
                  </li>
                  <li className="hamburger" onClick={this.hideShowClick}><i className="fas fa-bars"></i></li>
                </ul>
              </div>
              :
              <div className="hamburger" onClick={this.hideShowClick}>
                <i className="fas fa-bars"></i>
              </div>
            :
            <div className="log-div">
              <p className="login-register"><Link to="/signIn-and-signUp">Login / Register</Link></p>
            </div>
        }


      </div>
    )
  }
}

export default Navbar

