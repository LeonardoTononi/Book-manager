import React from 'react';
import { Link } from 'react-router-dom';

import './footer.styles.scss'

const Footer = () => (
  <footer>
    <div className="grid">
      <div className="logo-container">
        <h1 className="logo">BooksManager</h1>
        <h5>Great tool for you</h5>
      </div>
      <div className="useful-link">
        <h4>Useful Links</h4>
        <p>Support</p>
        <p>Gift Cards</p>
        <p>Pricing</p>
      </div>
      <div className="company">
        <h4>Company</h4>
        <p>About</p>
        <p>Partners</p>
        <p>We are hiring!</p>
      </div>
      <div className="nav">
        <h4>Navigation</h4>
        <p>Dashboard</p>
        <p>My books</p>
        <p>Add a book</p>
        <p>My profile</p>
      </div>
    </div>
    <div className="copyright">
      <p>© iRead 2019 </p>
      <p>Sitemap</p>
      <p>Disclaimer</p>
      <p>User Privacy</p>
      <p>Terms</p>
    </div>
    <div className="socials">
      <i class="fab fa-facebook"></i>
      <i class="fab fa-twitter"></i>
      <i class="fab fa-linkedin-in"></i>
    </div>
  </footer>
)

export default Footer 