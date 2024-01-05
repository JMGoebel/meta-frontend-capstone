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

  // Close the menu if clicked outside of the component
  const closeMenu = () => {
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
  }, []);

  return (
    <>
      <div
        className="hamburger-component"
        ref={refDropDown}
        onClick={toggleMenu}
      >
        <img className="hamburger" src={hamburger} alt="" />
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
