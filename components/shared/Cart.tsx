"use client";

import { useAppSelector } from "@/hooks/redux";
import { COLORS } from "@/styles/colors";
import { HorizontalRule } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import CartItem from "../CartItem";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";

const Cart = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const router = useRouter();
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ backgroundColor: COLORS.white }}>
        <Typography variant="h1">Shopping Cart</Typography>
        <HorizontalRule sx={{ color: COLORS.lightGray }} />
        {cart.map((item: any) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </Box>
      <Box sx={{ backgroundColor: COLORS.white }}>
        <CustomButton
          onClick={() => {
            router.push("/checkout");
          }}
        >
          Proceed to checkout
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Cart;
