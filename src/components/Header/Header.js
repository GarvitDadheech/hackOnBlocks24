import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">XYZ</div>
      <nav className="nav">
        <a href="#" className="nav-link">Product</a>
        <a href="#" className="nav-link">Developers</a>
        <a href="#" className="nav-link">Pricing</a>
        <a href="#" className="nav-link">Docs</a>
        <a href="#" className="nav-link">Blog</a>
      </nav>
      <button className="nav-button">GET STARTED</button>
    </header>
  );
};

export default Header;
