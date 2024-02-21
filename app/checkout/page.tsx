import Checkout from "@/components/Checkout";
import { Box } from "@mui/material";
import React from "react";

const CheckoutPage = () => {
  return (
    <Box
      sx={{
        transform: "translateY(-145px)",
        height: "100vh",
      }}
    >
      <Checkout />
    </Box>
  );
};

export default CheckoutPage;
