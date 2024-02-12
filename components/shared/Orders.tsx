"use client";

import { useSupabase } from "@/hooks/useSupabase";
import React from "react";

const Orders = () => {
  const { filteredProducts, getFilteredProducts } = useSupabase();
  console.log(filteredProducts);
  return (
    <div>
      {" "}
      {filteredProducts.map((product) => {
        return <p key={product.id}>{product.title}</p>;
      })}
      Orders
    </div>
  );
};

export default Orders;
