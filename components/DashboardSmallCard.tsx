import { COLORS } from "@/styles/colors";
import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const DashboardSmallCard = ({
  title,
  image,
  link,
}: {
  title: string;
  image: string;
  link: string;
}) => {
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
      <Typography variant="h2" sx={{ fontWeight: 700 }}>
        {title}
      </Typography>
      <Link href={`/product/${link}`}>
        <Image src={image} width={225} height={300} alt={"dashboard-image"} />
      </Link>
      <Typography
        variant="body1"
        sx={{ color: COLORS.teal, marginTop: "0.5rem" }}
      >
        Shop Now
      </Typography>
    </Box>
  );
};

export default DashboardSmallCard;
