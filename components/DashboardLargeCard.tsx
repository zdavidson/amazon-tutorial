"use client";
import { COLORS } from "@/styles/colors";
import { Product } from "@/types/supabase";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardLargeCard = ({
  title,
  products,
}: {
  title: string;
  products: any;
}) => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.white,
        padding: "1rem",
        width: 1100,
        height: 200,
        margin: "0.5rem",
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: 700, marginBottom: "0.5rem" }}>
        {title}
      </Typography>
      <Box sx={{ display: "flex" }}>
        {products.slice(0, 8).map((product: Product) => {
          return (
            <Box key={product.id} sx={{ margin: "0.25rem" }}>
              <Link href={`/product/${product.id}`}>
                <Image
                  src={product.image}
                  width={125}
                  height={150}
                  alt={product.title!}
                />
              </Link>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default DashboardLargeCard;
