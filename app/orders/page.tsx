import Orders from "@/components/shared/Orders";
import { COLORS } from "@/styles/colors";
import { Box, Container } from "@mui/material";
import React from "react";

const OrdersPage = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.white }}>
      <Container>
        <Orders />
      </Container>
    </Box>
  );
};

export default OrdersPage;
