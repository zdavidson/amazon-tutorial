"use client";

import { useSupabase } from "@/hooks/useSupabase";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const QueryPage = () => {
  const { filteredProducts, getFilteredProducts } = useSupabase();
  const { query } = useParams();

  useEffect(() => {
    getFilteredProducts(query.toString());
  }, [getFilteredProducts, query]);
  return (
    <div>
      {filteredProducts.map((product) => {
        return <p key={product.id}>{product.title}</p>;
      })}
    </div>
  );
};

export default QueryPage;
