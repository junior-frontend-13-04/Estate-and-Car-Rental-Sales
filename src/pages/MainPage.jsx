import React from "react";
import { Header } from "../layout/Header";
import { styled } from "@mui/material";
import backgroundImage from "../assets/image/metaverse4.png";

export const MainPage = () => {
  return (
    <MainContainer>
      <Header />
      <Main></Main>
    </MainContainer>
  );
};

const MainContainer = styled("div")`
  background-image: url(${backgroundImage});
  background-size: contain;
  height: 100rem;
  background-repeat: no-repeat;
`;

const Main = styled("div")`
  background: linear-gradient(
    357.33deg,
    #212a30 22.15%,
    rgba(27, 27, 27, 0.535551) 56.13%,
    rgba(27, 27, 27, 0.18) 81.14%,
    rgba(27, 27, 27, 0) 106.02%
  );
  height: inherit;
`;
