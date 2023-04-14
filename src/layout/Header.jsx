import styled from "@emotion/styled";
import React from "react";
import { ReactComponent as Logo } from "../assets/icon/logo.svg";

export const Header = () => {
  return (
    <Container>
      <Logo />
      <Nav>
        <li>Home</li>
        <li>About Us</li>
        <li>Other Projects</li>
        <button>Enquire Now</button>
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
`;

const Nav = styled("nav")`
  display: flex;
  gap: 35px;
  list-style: none;
  color: #fffbfb;
`;
