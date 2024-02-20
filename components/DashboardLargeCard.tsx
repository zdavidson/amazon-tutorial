import { COLORS } from "@/styles/colors";
import { Box, Typography } from "@mui/material";
import React from "react";

const DashboardLargeCard = () => {
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
      <Typography variant="h2">Best Sellers</Typography>
    </Box>
  );
};

export default DashboardLargeCard;
