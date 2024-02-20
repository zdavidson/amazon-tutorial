import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { useAppDispatch } from "@/hooks/redux";
import { removeItem } from "@/store/cartSlice";

const CartItem = ({ item }: { item: any }) => {
  const dispatch = useAppDispatch();
  return (
    <Box sx={{ display: "flex" }}>
      <Image
        src={item.image}
        width={225}
        height={257}
        alt={item.title!}
        style={{ marginRight: "2rem" }}
      />
      <Typography variant="h2">{item.title}</Typography>
      <Button onClick={() => dispatch(removeItem(item))}>Delete</Button>
    </Box>
  );
};

export default CartItem;
