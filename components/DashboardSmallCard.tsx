import { COLORS } from "@/styles/colors";
import { Box, Typography } from "@mui/material";
import React from "react";

const DashboardSmallCard = () => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.white,
        padding: "1rem",
        width: 250,
        height: 350,
        margin: "0.5rem",
      }}
    >
      <Typography variant="h2">Top Deal</Typography>
    </Box>
  );
};

export default DashboardSmallCard;
