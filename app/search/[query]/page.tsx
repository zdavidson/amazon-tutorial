"use client";

import SearchResults from "@/components/SearchResults";
import ProductCard from "@/components/shared/ProductCard";
import { useSupabase } from "@/hooks/useSupabase";
import { Box, Container } from "@mui/material";
import { useParams } from "next/navigation";
import React, { useEffect } from "react";

const QueryPage = () => {
  const { filteredProducts, getFilteredProducts } = useSupabase();
  const { query } = useParams();

  useEffect(() => {
    getFilteredProducts(query.toString());
  }, [getFilteredProducts, query]);
  return (
    <Container>
      <SearchResults products={filteredProducts} />
    </Container>
  );
};

export default QueryPage;