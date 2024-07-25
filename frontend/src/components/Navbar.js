// src/components/Navbar/Navbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">Cinema Cloud</div>
      <nav className="navbar-menu">
        <a href="/">Home</a>
        <a href="/profile">Profile</a>
        <a href="/subscription">Subscription</a>
        <a href="/movies">Movies</a>
        <a href="/inquiry">Inquiry</a>
      </nav>
    </header>
  );
};

export default Navbar;
