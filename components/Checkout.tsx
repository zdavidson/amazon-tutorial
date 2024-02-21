"use client";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Logo from "./shared/Logo";
import { COLORS } from "@/styles/colors";
import CustomHR from "./shared/CustomHR";
import LockIcon from "@mui/icons-material/Lock";
import CustomButton from "./shared/CustomButton";
import { useAppSelector } from "@/hooks/redux";
import { selectCart } from "@/store/cartSlice";
import { Product } from "@/types/supabase";
import CheckoutItem from "./CheckoutItem";

const Checkout = () => {
  const cart = useAppSelector(selectCart);

  let totalCart = 0;

  cart.forEach((item: Product) => (totalCart = totalCart + item.price!));
  return (
    <Box>
      <Box sx={{ backgroundColor: COLORS.lightGray }}>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "2rem 0 0.5rem 0",
          }}
        >
          <Logo dark />
          <Typography variant="h1" sx={{ fontWeight: 500 }}>
            Checkout (
            <span style={{ color: COLORS.teal }}>{cart.length} items</span>)
          </Typography>
          <LockIcon sx={{ color: COLORS.darkGray }} />
        </Container>
        <CustomHR />
      </Box>
      <Box
        sx={{
          backgroundColor: COLORS.white,
          minHeight: "100vh",
          padding: "0.5rem 0",
        }}
      >
        <Container sx={{ display: "flex" }}>
          <Box sx={{ minWidth: 800 }}>
            <Box sx={{ margin: "1rem 0", display: "flex" }}>
              <Typography
                variant="h3"
                sx={{ fontWeight: 700, marginRight: "3rem" }}
              >
                <span style={{ marginRight: "1.75rem" }}>1</span> Shipping
                Address
              </Typography>
              <Typography variant="body2">
                Harry Potter<br></br>123 Diagon Alley<br></br>London WC2H 9FB{" "}
                <br></br>United Kingdom
              </Typography>
            </Box>
            <CustomHR />
            <Box sx={{ margin: "1rem 0", display: "flex" }}>
              <Typography
                variant="h3"
                sx={{ fontWeight: 700, marginRight: "3rem" }}
              >
                <span style={{ marginRight: "1.75rem" }}>2</span> Payment Method
              </Typography>
              <Box>
                <Typography variant="body2" sx={{ fontWeight: 700 }}>
                  Paying with Galleons
                </Typography>
                <Typography variant="body2" sx={{ color: COLORS.teal }}>
                  Billing address:{" "}
                  <span style={{ color: COLORS.black }}>
                    {" "}
                    Harry Potter, 123 Diagon Alley...
                  </span>
                </Typography>
              </Box>
            </Box>
            <CustomHR />
            <Box sx={{ margin: "1rem 0", display: "flex" }}>
              <Typography
                variant="h3"
                sx={{ fontWeight: 700, marginRight: "3rem" }}
              >
                <span style={{ marginRight: "1.75rem" }}>3</span> Review items
                and shipping
              </Typography>
            </Box>

            {cart.map((item: Product) => {
              return <CheckoutItem key={item.id} item={item} />;
            })}

            <Box
              sx={{
                border: `1px solid ${COLORS.lightGray}`,
                borderRadius: "0.5rem",
                marginLeft: "2.5rem",
                width: 750,
                padding: "1rem",
                marginBottom: "1rem",
                display: "flex",
                alignItems: "center",
              }}
            >
              <CustomButton onClick={() => console.log("")}>
                Place Your Order
              </CustomButton>
              <Box
                sx={{
                  marginLeft: "1rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  marginTop: "1rem",
                }}
              >
                <Typography
                  variant="h3"
                  sx={{ fontWeight: 700, color: COLORS.red, lineHeight: 0.5 }}
                >
                  Order total: ${(totalCart + totalCart * 0.07).toFixed(2)}
                </Typography>

                <Typography sx={{ margin: "0.5rem 0" }}>
                  By placing your order, you agree to Amazon&apos;s{" "}
                  <span style={{ color: COLORS.teal }}>privacy notice</span> and{" "}
                  <span style={{ color: COLORS.teal }}>conditions of use</span>.
                </Typography>
              </Box>
            </Box>
            <CustomHR />
          </Box>

          <Box
            sx={{
              border: `1px solid ${COLORS.lightGray}`,
              borderRadius: "0.5rem",
              marginLeft: "2rem",
              width: 280,
              height: 200,
            }}
          >
            <Box sx={{ padding: "1rem" }}>
              <CustomButton
                onClick={() => console.log("")}
                sx={{ width: "100%" }}
              >
                Place Your Order
              </CustomButton>
              <Typography sx={{ textAlign: "center", margin: "0.5rem 0" }}>
                By placing your order, you agree to Amazon&apos;s{" "}
                <span style={{ color: COLORS.teal }}>privacy notice</span> and{" "}
                <span style={{ color: COLORS.teal }}>conditions of use</span>.
              </Typography>
              <CustomHR />
              <Typography
                variant="h3"
                sx={{ margin: "0.75rem 0", fontWeight: 700 }}
              >
                Order Summary
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography>Subtotal ({cart.length} items)</Typography>
                <Typography>${totalCart}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.5rem",
                }}
              >
                <Typography>Shipping & handling</Typography>
                <Typography>$0.00</Typography>
              </Box>
              <CustomHR />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "0.5rem",
                }}
              >
                <Typography>Total before tax</Typography>
                <Typography>${totalCart}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.5rem",
                }}
              >
                <Typography>Estimated tax to be collected</Typography>
                <Typography>${totalCart * 0.07}</Typography>
              </Box>
              <CustomHR />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: COLORS.red,
                  margin: "0.5rem 0",
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: 700 }}>
                  Order total
                </Typography>
                <Typography sx={{ fontWeight: 700 }} variant="h3">
                  ${(totalCart + totalCart * 0.07).toFixed(2)}
                </Typography>
              </Box>
              <CustomHR />
            </Box>
            <Box sx={{ backgroundColor: COLORS.lightGray, padding: "1rem" }}>
              <Typography sx={{ color: COLORS.teal, marginBottom: "0.5rem" }}>
                How are shipping costs calculated?
              </Typography>
              <Typography>
                Prime shipping benefits have been applied to your order.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Checkout;
