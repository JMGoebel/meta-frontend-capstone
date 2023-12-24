import React from "react";
import aboutPhotoOne from "../assets/restaurant.jpg";
import aboutPhotoTwo from "../assets/restaurant chef B.jpg";

export const About = () => {
  return (
    <>
      <div>
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>About us and stuff like that</p>
      </div>
      <div>
        <img src={aboutPhotoOne} alt="" />
        <img src={aboutPhotoTwo} alt="" />
      </div>
    </>
  );
};
