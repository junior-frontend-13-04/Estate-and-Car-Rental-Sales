import styled from "@emotion/styled";
import { MySlider } from "../slider/MySlider";
import { Button } from "./Button";

export const Card = ({ image, price, bedrooms, bath, sq }) => {
  return (
    <Container>
      <div>
        <MySlider />
        <HouseInfo>
          <TopPart>
            <h1 className="price">100.000 $</h1>
            <Button>View Details</Button>
          </TopPart>
          <InfoContainer>
            <Info>1 Bedrooms</Info>
            <Info
              border={{
                left: "1px solid rgba(255, 251, 251, 0.35)",
                rigth: "1px solid rgba(255, 251, 251, 0.35)",
                width: "200px",
              }}
            >
              1 Bath
            </Info>
            <Info> 535 sq ft</Info>
          </InfoContainer>
        </HouseInfo>
      </div>
    </Container>
  );
};

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const HouseInfo = styled("div")`
  background: #2c2b2b;
  border-radius: 0px 0px 4px 4px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
  padding: 16px 16px;
`;

const Info = styled("h2")`
  border-left: ${(p) => p.border?.left};
  border-right: ${(p) => p.border?.rigth};
  width: ${(p) => p.border?.width};
`;

const InfoContainer = styled("div")`
  display: flex;
  justify-content: space-around;
  border: 1px solid rgba(255, 251, 251, 0.35);
  border-radius: 8px;
  height: 42px;
  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(255, 251, 251, 0.65);
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
  }
`;

const TopPart = styled("div")`
  display: flex;
  justify-content: space-between;
  .price {
    color: #fffbfb;
  }
`;
