import React from "react";
import heroImg from "../assets/bruchetta.svg";

export const Hero = () => {
  return (
    <section>
      <div>
        <h2>Little Lemon</h2>
        <h4>Chicago</h4>
        <p>Lorem ipsum</p>
        <button>Reserve a Table</button>
      </div>
      <img src={heroImg} alt="" />
    </section>
  );
};
