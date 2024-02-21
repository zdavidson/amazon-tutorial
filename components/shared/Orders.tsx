"use client";

import { useSupabase } from "@/hooks/useSupabase";
import { Box, Typography } from "@mui/material";
import React from "react";

const Orders = () => {
  const { filteredProducts, getFilteredProducts } = useSupabase();

  return (
    <Box sx={{ padding: "3rem 0" }}>
      <Typography variant="h1" sx={{ fontWeight: 500, marginBottom: "0.5rem" }}>
        Your Orders
      </Typography>{" "}
      {filteredProducts.map((product) => {
        return <p key={product.id}>{product.title}</p>;
      })}
    </Box>
  );
};

export default Orders;
