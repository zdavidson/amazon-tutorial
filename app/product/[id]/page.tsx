"use client";

import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";

import { useSupabase } from "@/hooks/useSupabase";
import { useParams } from "next/navigation";
import ProductDetails from "@/components/ProductDetails";
import { COLORS } from "@/styles/colors";

const ProductPage = () => {
  const { singleProduct, getSingleProduct } = useSupabase();
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(Number(id));
  }, [getSingleProduct, id, singleProduct]);
  return (
    <Box sx={{ backgroundColor: COLORS.white }}>
      <Container maxWidth="xl">
        <ProductDetails product={singleProduct} />
      </Container>
    </Box>
  );
};

export default ProductPage;
