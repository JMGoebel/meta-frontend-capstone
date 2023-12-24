import React from "react";
import { ProductCard } from "./ProductCard";

export const Specials = () => {
  return (
    <>
      <h3>Specials</h3>
      <button>Online Menu</button>
      <div>
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </>
  );
};
