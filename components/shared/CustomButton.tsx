import { COLORS } from "@/styles/colors";
import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({
  onClick,
  children,
}: {
  onClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: COLORS.yellow,
        borderRadius: "2rem",
        color: COLORS.black,
        width: 200,
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
