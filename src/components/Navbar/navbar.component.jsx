import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils'

import './navbar.styles.scss';

const Navbar = ({ currentUser }) => {
  return (
    <div className="container-nav">
      <h1 className="logo">Book Manager</h1>
      <ul className="navbar">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/my-books">My Books</Link></li>
        {
          currentUser ? 
            <li className="logout" onClick={() => {
              auth.signOut();
            }}><Link to="/signIn-and-signUp">Logout</Link></li>
            :
            <div className="log-div">
              <li className="login-register"><Link to="/signIn-and-signUp">Login / Register</Link></li>
            </div>    
        }
      </ul>
    </div>
  )
}

export default Navbar