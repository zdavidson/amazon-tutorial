import React from "react";
import Search from "./SearchBar";
import { Box } from "@mui/material";
import Logo from "./Logo";
import { COLORS } from "@/styles/colors";
import HeaderLink from "./HeaderLink";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Header = () => {
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
    </Box>
  );
};

export default Header;
