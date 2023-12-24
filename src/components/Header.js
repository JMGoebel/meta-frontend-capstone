import React from "react";
import { Nav } from "./Nav";
import logo from "../assets/Logo.svg"

export const Header = () => {
  return (
    <header className="App-header">
      <img src={logo} alt="" />
      <Nav />
    </header>
  );
};