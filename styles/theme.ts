"use client";
import { createTheme } from "@mui/material";
import { COLORS } from "./colors";

const theme = createTheme({
  palette: {
    mode: "light",
  },
  typography: {
    h1: {
      fontSize: "1.75rem",
      fontWeight: 800,
    },
    h2: {
      fontSize: "1.3125rem",
      lineHeight: "1.7063rem",
    },
    h3: {
      fontSize: "1.125rem",
      lineHeight: "1.5rem",
    },
    h4: {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
    },
    body1: {
      fontSize: "0.75rem",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.white,
          borderRadius: "0.25rem",
        },
      },
    },
  },
});

export default theme;
