import React from 'react';
import { Nav } from './Nav';
import { HambugerMenu } from './HambugerMenu';
import logo from '../assets/Logo.svg';
import cart from '../assets/icon_cart.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header>
      {/* Mobile Header */}
      <HambugerMenu />
      <Link to="/cart">
        <img className="cart" src={cart} alt="" />
      </Link>

      {/* Desktop Header */}
      <img className="logo" src={logo} alt="" />
      <Nav />
    </header>
  );
};
