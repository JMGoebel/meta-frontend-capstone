import React, { useState, useRef, useEffect } from 'react';
import { Nav } from './Nav';
import '../styles/hamburgerMenu.scss';
import hamburger from '../assets/icon_hamburger-menu.svg';

export const HambugerMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const refDropDown = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    console.log('close menu');
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = e => {
      if (refDropDown.current && !refDropDown.current.contains(e.target))
        closeMenu();
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <>
      <div className="hamburger-component" ref={refDropDown}>
        <img
          className="hamburger"
          onClick={toggleMenu}
          src={hamburger}
          alt=""
        />
        <div
          className="dropdown"
          style={{ display: menuOpen ? 'flex' : 'none' }}
        >
          <Nav />
        </div>
      </div>
    </>
  );
};
