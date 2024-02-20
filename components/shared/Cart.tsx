import { COLORS } from "@/styles/colors";
import { HorizontalRule } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React from "react";

const Cart = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.white }}>
      <Typography variant="h1">Shopping Cart</Typography>
      <HorizontalRule sx={{ color: COLORS.lightGray }} />
    </Box>
  );
};

export default Cart;
