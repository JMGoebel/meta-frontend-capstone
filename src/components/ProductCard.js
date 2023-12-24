import React from "react";

export const ProductCard = ({
  img = "",
  title = "default",
  price = "$0.00",
  description = "default",
}) => {
  return (
    <>
      <img src={img} alt="" />
      <h3>{title}</h3>
      <h3>{price}</h3>
      <p>{description}</p>
      <p>Order a delivery</p>
    </>
  );
};
