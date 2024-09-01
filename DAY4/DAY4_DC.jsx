import React, { useState } from 'react';
import './DAY4_DC.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <div className="navbar-title">NavBar</div>
      <div className="login-button">Login</div>
      {menuOpen && (
        <div className="dropdown-menu">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
