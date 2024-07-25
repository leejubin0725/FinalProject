// src/components/Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">Cinema Cloud</div>
      <nav className="navbar-menu">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/subscription">Subscription</Link>
        <Link to="/inquiry">Inquiry</Link>
      </nav>
    </header>
  );
};

export default Navbar;
