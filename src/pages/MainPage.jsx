import React from "react";
import { Header } from "../layout/Header";
import { styled } from "@mui/material";
import backgroundImage from "../assets/image/Rectangle.png";
import { Card } from "../components/UI/Card";
import NavTabs from "../components/UI/NavTabs";
import { DATA_TABS } from "../utils/consts";

const MainPage = () => {
  const renderTabs = () => {
    return DATA_TABS.map((tab) => (
      <NavTabs key={tab.id} label={tab.label} link={tab.link} />
    ));
  };

  return (
    <Container>
      <TopSection>
        <Header />
        <Title>
          Find Your <span>Dream Home</span>
          <br /> @ Metaverse
        </Title>
      </TopSection>
      <MainSection>
        <Section>
          <TabsContainer>{renderTabs()}</TabsContainer>
          <CardsContainer>
            {[...Array(6)].map((_, i) => (
              <Card key={i} />
            ))}
          </CardsContainer>
        </Section>
      </MainSection>
    </Container>
  );
};

const Container = styled("div")`
  width: 100%;
`;

const TopSection = styled("div")`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
`;

const MainSection = styled("div")`
  width: 100%;
  background-color: #000000;
  padding-top: 63px;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const Title = styled("h1")`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  letter-spacing: 0.03em;
  margin: 240px 0px 0px 130px;
  color: white;

  span {
    color: #ff9505;
  }
`;

const Section = styled("div")`
  padding: 0px 130px;
  width: 100%;
`;

const TabsContainer = styled("div")`
  display: flex;
  gap: 24px;
  padding-bottom: 32px;
`;

const CardsContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default MainPage;
