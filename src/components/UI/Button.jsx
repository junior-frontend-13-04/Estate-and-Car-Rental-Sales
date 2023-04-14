import React from "react";
import { Button as MuiButton } from "@mui/material";

export const Button = ({ onClick, children, variant }) => {
  return (
    <MuiButton onClick={onClick} variant={variant}>
      {children}
    </MuiButton>
  );
};
