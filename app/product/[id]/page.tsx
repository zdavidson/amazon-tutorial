"use client";

import { Container } from "@mui/material";
import React, { useEffect } from "react";

import { useSupabase } from "@/hooks/useSupabase";
import { useParams } from "next/navigation";
import ProductDetails from "@/components/ProductDetails";

const ProductPage = () => {
  const { singleProduct, getSingleProduct } = useSupabase();
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(Number(id));
  }, [getSingleProduct, id, singleProduct]);
  return (
    <Container>
      <ProductDetails product={singleProduct} />
    </Container>
  );
};

export default ProductPage;
