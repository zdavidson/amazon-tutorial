"use client";

import { useAppSelector } from "@/hooks/redux";
import { COLORS } from "@/styles/colors";
import { HorizontalRule } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";
import CartItem from "../CartItem";
import CustomButton from "./CustomButton";
import { useRouter } from "next/navigation";
import CustomHR from "./CustomHR";
import { Product } from "@/types/supabase";
import { CheckCircle } from "@mui/icons-material";

const Cart = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const router = useRouter();
  let totalCart = 0;

  cart.forEach((item: Product) => (totalCart = totalCart + item.price!));
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        margin: "3rem 0",
      }}
    >
      <Box sx={{ backgroundColor: COLORS.white, padding: "2rem", width: 1050 }}>
        <Typography
          variant="h1"
          sx={{ fontWeight: 500, marginBottom: "0.5rem" }}
        >
          Shopping Cart
        </Typography>
        <Typography sx={{ textAlign: "right" }}>Price</Typography>
        <CustomHR />
        {cart.map((item: any) => {
          return <CartItem item={item} key={item.id} />;
        })}
        <Typography variant="h6" sx={{ textAlign: "right" }}>
          Subtotal ({cart.length} items):{" "}
          <span style={{ fontWeight: 700 }}>${totalCart}</span>
        </Typography>
      </Box>
      <Box
        sx={{
          backgroundColor: COLORS.white,
          display: "flex",
          flexDirection: "column",
          height: 175,
          padding: "1rem",
          width: 300,
        }}
      >
        <Box>
          <Typography sx={{ display: "flex", alignItems: "center" }}>
            <CheckCircle sx={{ color: COLORS.green, marginRight: "0.25rem" }} />
            <span style={{ color: COLORS.green }}>
              Your order qualifies for FREE Shipping.
            </span>{" "}
            <br></br>
          </Typography>
          <Typography sx={{ marginLeft: "1.75rem" }}>
            Choose this option at checkout.{" "}
            <span style={{ color: COLORS.teal }}>
              See<br></br> details
            </span>
          </Typography>
        </Box>
        <Typography variant="h6" sx={{ margin: "1rem 0" }}>
          Subtotal ({cart.length} items):{" "}
          <span style={{ fontWeight: 700 }}>${totalCart}</span>
        </Typography>
        <CustomButton
          onClick={() => {
            router.push("/checkout");
          }}
          sx={{ width: "100%" }}
        >
          Proceed to checkout
        </CustomButton>
      </Box>
    </Box>
  );
};

export default Cart;
