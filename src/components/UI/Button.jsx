import React from "react";
import styled from "@emotion/styled";

export const Button = ({ onClick, children }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
const StyledButton = styled("button")(() => ({
  padding: "12px 24px",
  borderRadius: "8px",
  background: "#FFFBFB",
  border: "1px solid #FFFBFB",
  fontFamily: "Inter",
  fontWeight: "600",
  fontSize: "14px",
  cursor: "pointer",
}));
