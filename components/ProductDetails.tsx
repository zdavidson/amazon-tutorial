import { COLORS } from "@/styles/colors";
import { Product } from "@/types/supabase";
import { Box, Button, Rating, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface Props {
  product: Product[];
}

const ProductDetails = ({ product }: Props) => {
  const router = useRouter();

  return (
    <Box sx={{ backgroundColor: COLORS.white }}>
      {product.map((prod) => {
        return (
          <Box key={prod.id} sx={{ display: "flex", padding: "2rem" }}>
            <Image
              src={prod.image}
              width={225}
              height={257}
              alt={prod.title!}
              style={{ marginRight: "2rem" }}
            />
            <Box>
              <Typography variant="h1">{prod.title}</Typography>
              <Rating />
              <Typography variant="h2" sx={{ fontWeight: 700 }}>
                ${prod.price}
              </Typography>
              <Typography variant="body2">{prod.description}</Typography>
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
              <Button
                onClick={() => router.push("/cart")}
                sx={{
                  backgroundColor: COLORS.yellow,
                  borderRadius: "2rem",
                  color: COLORS.black,
                  width: 200,
                }}
              >
                Add to Cart
              </Button>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default ProductDetails;
