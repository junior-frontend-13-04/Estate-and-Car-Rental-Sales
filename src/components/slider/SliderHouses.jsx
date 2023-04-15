import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import house from "../../assets/image/house.png";
import { Box } from "@mui/material";
import prev from "../../assets/icon/arrowLeft.svg";
import next from "../../assets/icon/nextArrow.svg";

const PrevArrow = ({ onClick }) => (
  <ArrowIcon onClick={onClick} className="prev" prev={next} />
);
const NextArrow = ({ onClick }) => (
  <ArrowIcon onClick={onClick} className="next" next={prev} />
);

const DATA = [
  { image: house },
  { image: house },
  { image: house },
  { image: house },
];

export const SliderHouses = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    beforeChange: (current, next) => setSlideIndex(next),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        {DATA.map((item, index) => (
          <Slide key={index} isActive={index === slideIndex}>
            <Image src={item.image} alt="" />
          </Slide>
        ))}
      </Slider>
    </SliderContainer>
  );
};

const SliderContainer = styled(Box)`
  --slide-height: 50vh;
  --arrow-size: 50px;
  width: 90%;
  .slick-track {
    display: flex;
    gap: 20px;
  }
`;

const ArrowIcon = styled("div")`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: var(--arrow-size);
  height: var(--arrow-size);
  background-repeat: no-repeat;
  background-position: center;
  &.prev {
    left: 100px;
    z-index: 2;
    background-image: url(${(p) => p.prev});
    cursor: pointer;
  }
  &.next {
    right: 100px;
    z-index: 2;
    background-image: url(${(p) => p.next});
    cursor: pointer;
  }
`;

const Slide = styled("div")`
  position: relative;
  width: 100%;
  height: var(--slide-height);
  overflow: hidden;
  transition: filter 0.3s ease-in-out;
  filter: brightness(${(props) => (props.isActive ? 1 : 0.5)});
  border: 10px solid white;
  border-radius: 8px;
`;

const Image = styled("img")`
  width: 100%;
  height: 100%;
  object-fit: fill;
`;
