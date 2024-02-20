"use client";

import { IconButton, InputBase, Paper } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import React, { FormEvent, useState } from "react";
import { COLORS } from "@/styles/colors";
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [query, setQuery] = useState<string>("");
  const router = useRouter();

  const searchProducts = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${query}/`);
  };

  return (
    <Paper
      component="form"
      sx={{ display: "flex", alignItems: "center", width: "80vw" }}
      onSubmit={searchProducts}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Amazon"
        inputProps={{ "aria-label": "search amazon" }}
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton
        type="submit"
        sx={{
          p: "10px",
          backgroundColor: COLORS.paleOrange,
          borderRadius: "0 0.25rem 0.25rem 0",

          "&:hover": {
            backgroundColor: COLORS.paleOrangeHover,
          },
        }}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
