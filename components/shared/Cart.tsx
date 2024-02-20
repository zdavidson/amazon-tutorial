"use client";

import { useAppSelector } from "@/hooks/redux";
import { COLORS } from "@/styles/colors";
import { HorizontalRule } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import CartItem from "../CartItem";

const Cart = () => {
  const { cart } = useAppSelector((state) => state.cart);
  return (
    <Box sx={{ backgroundColor: COLORS.white }}>
      <Typography variant="h1">Shopping Cart</Typography>
      <HorizontalRule sx={{ color: COLORS.lightGray }} />
      {cart.map((item: any, idx: number) => {
        return <CartItem item={item} key={item.id} />;
      })}
    </Box>
  );
};

export default Cart;
