import React from "react";

import { COLORS } from "@/styles/colors";
import { Box, Typography } from "@mui/material";

import Image from "next/image";

const Ratings = ({ rating }: { rating: any }) => {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ marginRight: "0.5rem" }}>
        <Image src="/star-icon.png" height={20} width={20} alt="star" />
        <Image src="/star-icon.png" height={20} width={20} alt="star" />
        <Image src="/star-icon.png" height={20} width={20} alt="star" />
        <Image src="/star-icon.png" height={20} width={20} alt="star" />
      </Box>
      <Typography
        variant="h2"
        sx={{
          color: COLORS.teal,
          "&:hover": {
            color: COLORS.orange,
          },
        }}
      >
        {rating.count}
      </Typography>
    </Box>
  );
};

export default Ratings;
