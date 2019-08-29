import React from 'react';

import './navbar.styles.scss';

const Navbar = () => {
  return (
    <div className="container-nav">
      <h1 className="logo">Book Manager</h1>
      <ul className="navbar">
        <li>Home</li>
        <li>Add Book</li>
        <li>Book List</li>
        <li className="login">LogIn</li>
        <li className="signup">SignUp</li>
        <li className="logout">LogOut</li>
      </ul>
    </div>
  )
}

export default Navbar