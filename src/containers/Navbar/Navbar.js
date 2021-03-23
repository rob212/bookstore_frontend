import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            <i className="custom fas fa-book-open"></i> Bookstore
          </Link>
          <ul className="nav-menu">

            <li className="nav-item">
              <Link to="/" className="nav-links">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/books" className="nav-links">
                Books
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/about" className="nav-links">
                About
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    )
  }
}

export { Navbar }