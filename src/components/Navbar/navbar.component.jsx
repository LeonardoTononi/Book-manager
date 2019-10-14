import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

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
    const { auth } = this.props;
    return (
      <div className="container-nav">
        <Link to="/">
          <h1 className="logo">BooksManager</h1>
        </Link>
        {
          auth.uid ?
            this.state.isVisible ?
              <div>
                <ul className="navbar">
                  <li><Link to="/">Dashboard</Link></li><li><Link to="/my-books">My Books</Link></li>
                  <li className="logout" onClick={this.props.signOut}>
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
              <p className="login-register"><Link to="/signIn-and-signUp">Sing In or Sign Up</Link></p>
            </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)

