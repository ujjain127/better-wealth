import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="navigation">
      <div className="nav-container">
        <div className="logo">
          <Link to="/">
            <h1>BETTER WEALTH</h1>
          </Link>
        </div>
        <nav className="nav-menu">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/investors">Investors</Link>
          <Link to="/planning">Planning</Link>
          <Link to="/insights">Insights</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
