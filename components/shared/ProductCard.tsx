"use client";

import { COLORS } from "@/styles/colors";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Ratings from "./Ratings";

interface Props {
  id: number;
  image: string;
  price: number;
  title: string;
  rating: { rate: number; count: number };
}

const ProductCard = ({ id, image, price, title, rating }: Props) => {
  const router = useRouter();
  const getNumOfStars = () => {
    for (let i = 0; i <= rating.count; i++) {
      return <Image src="/star-icon.png" height={20} width={20} alt="star" />;
    }
  };

  const selectProduct = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(`/product/${id}/`);
  };

  return (
    // <Link
    //   href={`/product/${id}`}
    //   style={{ textDecoration: "none", color: COLORS.black }}
    // >
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: 225,
        height: 450,
        margin: "0.5rem",
        backgroundColor: COLORS.white,
        padding: "1rem",
        justifyContent: "space-between",
      }}
      onClick={selectProduct}
    >
      <Image
        src={image}
        width={225}
        height={257}
        alt={title}
        style={{ marginBottom: "2rem" }}
      />
      <Box
        sx={{
          padding: "0.25rem",
        }}
      >
        <Link href={`/product/${id}`} style={{ textDecoration: "none" }}>
          <Typography
            variant="h2"
            sx={{
              color: COLORS.black,
              marginBottom: "0.25rem",
              "&:hover": {
                color: COLORS.orange,
              },
            }}
          >
            {title.substring(0, 15)}...
          </Typography>
        </Link>
        <Ratings rating={rating} />
        <Typography variant="h2" sx={{ fontWeight: 700 }}>
          ${price}
        </Typography>
      </Box>
    </Box>
    // </Link>
  );
};

export default ProductCard;
