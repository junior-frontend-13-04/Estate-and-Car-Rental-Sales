import React from "react";
import { Header } from "../layout/Header";
import { styled } from "@mui/material";
import backgroundImage from "../assets/image/Rectangle.png";
import { Card } from "../components/UI/Card";
import { Button } from "../components/UI/Button";

export const MainPage = () => {
  return (
    <MainContainer>
      <TopPart>
        <Header />
        <Heading>
          Find Your{" "}
          <span>
            Dream Home
            <br />{" "}
          </span>
          @ Metaverse
        </Heading>
      </TopPart>
      <Main>
        <Section>
          <Button>all</Button>
          <Button>Sdudio</Button>
          <Button>1 Bed Room</Button>
          <Button>2 Bed Room</Button>
          <InnerSection>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </InnerSection>
        </Section>
      </Main>
    </MainContainer>
  );
};

const MainContainer = styled("div")`
  width: 100%;
`;

const TopPart = styled("div")`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
`;

const Main = styled("div")`
  width: inherit;
  background: linear-gradient(
    357.33deg,
    #1b1b1b 22.15%,
    rgba(27, 27, 27, 0.535551) 56.13%,
    rgba(27, 27, 27, 0.18) 81.14%,
    rgba(27, 27, 27, 0) 106.02%
  );
`;

const Heading = styled("h1")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  letter-spacing: 0.03em;
  margin-top: 240px;
  color: white;
  span {
    color: #ff9505;
  }
`;

const Section = styled("div")`
  padding: 0px 130px 0px 130px;
  width: 100%;
`;

const Content = styled("div")``;

const InnerSection = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
