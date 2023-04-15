import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as Logo } from "../assets/icon/logo.svg";
import { Button } from "../components/UI/Button";

export const Header = () => {
  return (
    <Container>
      <Logo />
      <Nav>
        <li>Home</li>
        <li>About Us</li>
        <li>Other Projects</li>
        <Button variant="outlined">Enquire Now</Button>
      </Nav>
    </Container>
  );
};

const Container = styled("header")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 20px 130px 20px 130px;
  font-family: Inter;
  font-weight: 600;
  background-repeat: no-repeat;
  background-size: contain;
`;

const Nav = styled("nav")`
  display: flex;
  gap: 35px;
  align-items: center;
  list-style: none;
  color: #fffbfb;
`;
