import { COLORS } from "@/styles/colors";
import { Button } from "@mui/material";
import React from "react";
import { SxProps, Theme } from "@mui/material/styles";

const CustomButton = ({
  onClick,
  children,
  sx,
}: {
  onClick: () => void;
  children: React.ReactNode;
  sx?: SxProps<Theme>;
}) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        backgroundColor: COLORS.yellow,
        borderRadius: "2rem",
        color: COLORS.black,
        width: 200,
        ...sx,
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
