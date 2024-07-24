import React from 'react';
import './Header.css';

const Header = () => {
  const getStarted = () => {
    let startedbtn = document.querySelector('.features');
    startedbtn.scrollIntoView({behavior: 'smooth'});
  }
  return (
    <header className="header-container">
      <div className="logo">DevEXP</div>
      <nav className="nav">
        <a href="https://youtu.be/uBIKsnWli2g?si=J9TMrMHACPlK7XAu" className="nav-link" target='blank'>Demo</a>
        <a href="https://github.com/GarvitDadheech/hackOnBlocks24" className="nav-link" target='blank'>Github</a>
        <a href="https://www.npmjs.com/package/payment-gateway-crypto" className="nav-link" target='blank'>Docs</a>
      </nav>
      <button className="nav-button" onClick={getStarted}>GET STARTED</button>
    </header>
  );
};

export default Header;
