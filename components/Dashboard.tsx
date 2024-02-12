"use client";
import { useSupabase } from "@/hooks/useSupabase";
import React, { useEffect } from "react";

const Dashboard = () => {
  const { products, getProducts } = useSupabase();

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  return (
    <div>
      {products.map((product) => {
        return <p key={product.id}>{product.title}</p>;
      })}
    </div>
  );
};

export default Dashboard;
