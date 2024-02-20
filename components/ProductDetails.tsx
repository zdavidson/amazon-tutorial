"use client";

import { useAppDispatch } from "@/hooks/redux";
import { addToCart } from "@/store/cartSlice";
import { COLORS } from "@/styles/colors";
import { Product } from "@/types/supabase";
import { Box, Rating, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import CustomButton from "./shared/CustomButton";
import CustomHR from "./shared/CustomHR";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { getRandomNumber } from "@/utils";

interface Props {
  product: Product[];
}

const ProductDetails = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(1);
  const [inStock, setInStock] = useState(2);

  useEffect(() => {
    setHours(getRandomNumber(12));
    setMinutes(getRandomNumber(59));
    setInStock(getRandomNumber(10));
  }, []);

  return (
    <Box sx={{ backgroundColor: COLORS.white, padding: "3rem 0" }}>
      <Box>
        {product.map((prod) => {
          return (
            <Box key={prod.id} sx={{ display: "flex", padding: "2rem" }}>
              <Image
                src={prod.image}
                width={500}
                height={600}
                alt={prod.title!}
                style={{ marginRight: "8rem" }}
              />

              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography
                  variant="h1"
                  sx={{ fontWeight: 500, fontSize: "1.5rem" }}
                >
                  {prod.title}
                </Typography>
                <Rating />
                <CustomHR />
                <Typography
                  variant="h2"
                  sx={{ fontSize: "2rem", margin: "1rem 0" }}
                >
                  ${prod.price}
                </Typography>
                <Typography
                  sx={{ color: COLORS.teal, margin: "0.5rem 0" }}
                  variant="body2"
                >
                  FREE Returns
                </Typography>
                <Typography sx={{ margin: "0.5rem 0" }}>
                  Available at a lower price from other sellers that may not
                  offer free Prime shipping.
                </Typography>
                <CustomHR />
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  Description
                </Typography>
                <Typography variant="body2">{prod.description}</Typography>
              </Box>
              <Box>
                <Box
                  sx={{
                    border: `1px solid ${COLORS.lightGray}`,
                    borderRadius: "0.5rem",
                    padding: "1rem",
                    marginLeft: "2rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  <Image
                    src="/prime-logo.png"
                    width={50}
                    height={30}
                    alt={prod.title!}
                  />
                  <Typography sx={{ fontWeight: 700 }} variant="body2">
                    Enjoy fast, free delivery, exclusive deals, and
                    award-winning moves & TV shows with Prime.
                  </Typography>
                  <Typography variant="body2">
                    <span style={{ color: COLORS.teal }}>Try Prime</span> and
                    start saving today with{" "}
                    <span style={{ fontWeight: 700 }}>fast, free delivery</span>
                  </Typography>
                </Box>
                <Box
                  sx={{
                    border: `1px solid ${COLORS.lightGray}`,
                    borderRadius: "0.5rem",
                    padding: "1rem",
                    marginLeft: "2rem",
                  }}
                >
                  <Typography variant="h2" sx={{ fontWeight: 700 }}>
                    ${prod.price}
                  </Typography>
                  <Typography
                    sx={{ color: COLORS.teal, margin: "0.5rem 0" }}
                    variant="body2"
                  >
                    FREE Returns
                  </Typography>
                  <Typography
                    sx={{ color: COLORS.teal, margin: "0.5rem 0" }}
                    variant="body2"
                  >
                    FREE delivery{" "}
                    <span style={{ color: COLORS.black, fontWeight: 700 }}>
                      in 2 days
                    </span>
                  </Typography>
                  <Typography variant="body2">
                    Or fastest delivery{" "}
                    <span style={{ fontWeight: 700 }}>tomorrow</span>. Order
                    within{" "}
                    <span style={{ color: COLORS.green }}>
                      {hours} hrs and {minutes} mins
                    </span>
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      margin: "0.5rem 0",
                      alignItems: "center",
                    }}
                  >
                    <LocationOnIcon />
                    <span style={{ color: COLORS.teal }}>
                      Deliver to New York 10011
                    </span>
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: COLORS.red,
                      fontWeight: 700,
                      margin: "0.5rem 0",
                    }}
                  >
                    Only {inStock} left in stock - order soon.
                  </Typography>
                  <CustomButton
                    onClick={() => {
                      dispatch(addToCart(prod));
                      router.push("/cart");
                    }}
                  >
                    Add to Cart
                  </CustomButton>
                  <CustomButton
                    onClick={() => {
                      dispatch(addToCart(prod));
                      router.push("/checkout");
                    }}
                    sx={{
                      backgroundColor: COLORS.paleOrange,
                      margin: "0.5rem 0",
                      "&:hover": {
                        backgroundColor: COLORS.orange,
                      },
                    }}
                  >
                    Buy Now
                  </CustomButton>
                  <Typography
                    sx={{
                      margin: "0.5 0",
                      color: COLORS.darkGray,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    Ships from{" "}
                    <span style={{ color: COLORS.black }}>Amazon</span>
                  </Typography>
                  <Typography
                    sx={{
                      margin: "0.5 0",
                      color: COLORS.darkGray,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    Returns <span style={{ color: COLORS.teal }}>Eligible</span>
                  </Typography>
                  <Typography
                    sx={{
                      margin: "0.5 0",
                      color: COLORS.darkGray,
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    Payment
                    <span style={{ color: COLORS.teal }}>
                      Secure transaction
                    </span>
                  </Typography>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
      <Box sx={{ margin: "2rem 0" }}>
        <CustomHR />
        <Typography variant="h2" sx={{ fontWeight: 700 }}>
          Buy it with
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductDetails;
