import './Navbar.css'; // For styling
import React from 'react';
const Navbar = ({ userName, onLoginClick }) => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Pappy Luxe</h1>
      <ul className="navbar-links">
        <li className="navbar-item">
          {userName ? (
            <span>Welcome, {userName}</span> // Show user name if logged in
          ) : (
            <span onClick={onLoginClick}>Login</span> // Show login button if not logged in
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;