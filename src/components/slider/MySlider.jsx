import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prev from "../../assets/icon/arrowLeft.svg";
import next from "../../assets/icon/nextArrow.svg";
import styled from "@emotion/styled";
import house from "../../assets/image/house.png";

const PrevArrow = ({ onClick }) => (
  <PrevIcon onClick={onClick} src={prev} alt="prev-arrow" />
);
const NextArrow = ({ onClick }) => (
  <NextIcon onClick={onClick} src={next} alt="next-arrow" />
);

export const MySlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <SliderContainer>
      <Slider {...settings}>
        <div>
          <Image src={house} alt="" />
        </div>
        <div>
          <Image src={house} alt="" />
        </div>
        <div>
          <Image src={house} alt="" />
        </div>
      </Slider>
    </SliderContainer>
  );
};

const SliderContainer = styled("div")`
  .my-slider {
    width: 100%;
  }

  .my-slider .slick-track {
    display: flex;
  }
`;

const PrevIcon = styled("img")`
  position: absolute;
  left: 700px;
  top: 250px;
  cursor: pointer;
  z-index: 2;
`;
const NextIcon = styled("img")`
  position: absolute;
  top: 250px;
  left: 30px;
  cursor: pointer;
  z-index: 2;
`;

const Image = styled("img")`
  width: inherit;
`;
