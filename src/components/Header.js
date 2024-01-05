import React from "react";
import { Nav } from "./Nav";
import { HambugerMenu } from "./HambugerMenu";
import logo from "../assets/Logo.svg";
import cart from "../assets/icon_cart.svg";

export const Header = () => {
  return (
    <header>
      {/* Mobile Header */}
      <HambugerMenu />
      <img className="cart" src={cart} alt="" />
      
      {/* Desktop Header */}
      <img className="logo" src={logo} alt="" />
      <Nav />
    </header>
  );
};
