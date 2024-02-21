import React from "react";
import Search from "./SearchBar";
import { Box, Typography } from "@mui/material";
import Logo from "./Logo";
import { COLORS } from "@/styles/colors";
import HeaderLink from "./HeaderLink";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";

const Header = () => {
  const linkList = [
    "Medical Care",
    "Groceries",
    "Best Sellers",
    "Amazon Basics",
    "Prime",
    "Music",
    "Customer Service",
    "New Releases",
    "Today's Deals",
    "Registry",
    " Books",
    "Pharmacy",
    "Amazon Home",
    "Gift Cards",
    "Fashion",
    "Luxury Stores",
  ];

  return (
    <Box
      sx={{
        backgroundColor: COLORS.darkBlue,
        color: COLORS.white,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          padding: "1rem",
          justifyContent: "space-between",
        }}
      >
        <Logo />
        <Search />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <HeaderLink href="/orders">
            <span style={{ fontSize: "0.75rem" }}>Returns</span> <br></br>
            <span style={{ fontWeight: 700 }}>& Orders</span>
          </HeaderLink>
          <HeaderLink
            href="/cart"
            style={{ display: "flex", alignItems: "flex-end" }}
          >
            <ShoppingCartIcon fontSize="large" />
            <span style={{ fontWeight: 700 }}>Cart</span>
          </HeaderLink>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: COLORS.mediumBlue,
          padding: "0.5rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <HeaderLink href="/all">
            <Typography
              variant="body2"
              sx={{
                fontWeight: 700,
                marginRight: "1rem",
                display: "flex",

                "&:hover": {
                  color: COLORS.orange,
                },
              }}
            >
              <DensityMediumIcon sx={{ marginRight: "0.25rem" }} />
              All
            </Typography>
          </HeaderLink>
          {linkList.map((link) => {
            return (
              <HeaderLink
                href={`/${link}`}
                key={link}
                style={{ marginRight: "1rem" }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    "&:hover": {
                      color: COLORS.orange,
                    },
                  }}
                >
                  {link}
                </Typography>
              </HeaderLink>
            );
          })}
        </Box>
        <HeaderLink href="small">
          <Typography
            variant="body2"
            sx={{
              fontWeight: 700,
              "&:hover": {
                color: COLORS.orange,
              },
            }}
          >
            Support Small Businesses
          </Typography>
        </HeaderLink>
      </Box>
    </Box>
  );
};

export default Header;
