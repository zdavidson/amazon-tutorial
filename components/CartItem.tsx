"use client";

import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAppDispatch } from "@/hooks/redux";
import { removeItem } from "@/store/cartSlice";
import CustomHR from "./shared/CustomHR";
import { getRandomNumber } from "@/utils";
import { COLORS } from "@/styles/colors";

const CartItem = ({ item }: { item: any }) => {
  const dispatch = useAppDispatch();

  const [inStock, setInStock] = useState(2);

  useEffect(() => {
    setInStock(getRandomNumber(10));
  }, []);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", margin: "1rem 0" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: "1rem 0",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <Image
            src={item.image}
            width={225}
            height={257}
            alt={item.title!}
            style={{ marginRight: "2rem" }}
          />
          <Box>
            <Typography variant="h2">{item.title}</Typography>
            <Typography
              sx={{
                color: COLORS.red,
                margin: "0.5rem 0",
              }}
            >
              Only {inStock} left in stock - order soon.
            </Typography>
            <Typography>Eligible for FREE Shipping & FREE Returns</Typography>
            <Button onClick={() => dispatch(removeItem(item))}>Delete</Button>
          </Box>
        </Box>
        <Typography variant="h3" sx={{ fontWeight: 700 }}>
          ${item.price}
        </Typography>
      </Box>
      <CustomHR />
    </Box>
  );
};

export default CartItem;
