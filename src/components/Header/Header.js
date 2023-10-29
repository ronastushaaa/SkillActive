import React from 'react';
import './Header.css';
import logo from '../../images/logo.svg';

function Header() {
  return (
    <div className="header">
      <img src={logo} className="header__logo" />
    </div>
  );
}

export default Header;
