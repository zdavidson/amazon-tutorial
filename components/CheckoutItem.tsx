import { Product } from "@/types/supabase";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Select,
  Typography,
} from "@mui/material";
import React from "react";
import Image from "next/image";
import { COLORS } from "@/styles/colors";

const CheckoutItem = ({ item }: { item: Product }) => {
  return (
    <Box
      sx={{
        border: `1px solid ${COLORS.lightGray}`,
        borderRadius: "0.5rem",
        marginLeft: "2.5rem",
        width: 750,
        padding: "1rem",
        marginBottom: "1rem",
      }}
    >
      <Box sx={{ display: "flex", margin: "1rem 0" }}>
        <Image
          src={item.image}
          width={75}
          height={100}
          alt={item.title!}
          style={{ marginRight: "2rem" }}
        />
        <Box sx={{ marginRight: "0.75rem", width: "40%" }}>
          <Typography sx={{ fontWeight: 700 }} variant="body2">
            {item.title}
          </Typography>
          <Typography
            sx={{ color: COLORS.red, fontWeight: 700 }}
            variant="body2"
          >
            ${item.price}
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontWeight: 700 }} variant="body2">
            Choose your Prime delivery option:
          </Typography>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="tomorrow"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="tomorrow"
                control={<Radio />}
                label="Tomorrow morning"
                sx={{ color: COLORS.green, fontWeight: 700 }}
              />
              <Typography sx={{ marginLeft: "2rem", lineHeight: 0.25 }}>
                $2.99 <span style={{ color: COLORS.darkGray }}>- Delivery</span>
              </Typography>
              <FormControlLabel
                value="tomorrow-afternoon"
                control={<Radio />}
                label="Tomorrow afternoon"
                sx={{ color: COLORS.green, fontWeight: 700 }}
              />
              <Typography sx={{ marginLeft: "2rem", lineHeight: 0.25 }}>
                FREE{" "}
                <span style={{ color: COLORS.darkGray }}>One Day Delivery</span>
              </Typography>
              <FormControlLabel
                value="friday"
                control={<Radio />}
                label="Friday"
                sx={{ color: COLORS.green, fontWeight: 700 }}
              />
              <Typography sx={{ marginLeft: "2rem", lineHeight: 0.25 }}>
                FREE{" "}
                <span style={{ color: COLORS.darkGray }}>
                  Amazon Day Delivery
                </span>
              </Typography>
            </RadioGroup>
          </FormControl>
        </Box>
      </Box>
    </Box>
  );
};

export default CheckoutItem;
