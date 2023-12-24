import React from "react";

export const TestimonialCard = ({
  rating = "5",
  img = "",
  name = "Default",
  review = "default",
}) => {
  return (
    <>
      <p>{rating}</p>
      <img src={img} alt="" />
      <p>{name}</p>
      <p>{review}</p>
    </>
  );
};
