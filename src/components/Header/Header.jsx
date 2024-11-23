// src/components/Header/Header.jsx
import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
        <h1>
            <a href='/'>Studio Horijon</a>
        </h1>
      <nav>
        <ul>
          <li><a href="#manifesto">Vision</a></li>
          <li><a href="#team">Team</a></li>
          <li><a href="#product">Horijon</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;