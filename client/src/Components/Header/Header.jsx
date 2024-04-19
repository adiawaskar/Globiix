import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <div className="logo">
          <Link to="/">Globiix</Link>
        </div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/features">Features</Link></li>
          <li><Link to="/parallax">Parallax</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;


