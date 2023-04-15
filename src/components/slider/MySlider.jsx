import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import prev from "../../assets/icon/arrowLeft.svg";
import next from "../../assets/icon/nextArrow.svg";
import styled from "@emotion/styled";
import house from "../../assets/image/house.png";

const PrevArrow = ({ onClick }) => (
  <ArrowIcon onClick={onClick} className="prev" prev={next} />
);
const NextArrow = ({ onClick }) => (
  <ArrowIcon onClick={onClick} className="next" next={prev} />
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
  );
};

const ArrowIcon = styled("div")`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 15%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  border: 1px solid #585858;
  background-color: #585858;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  opacity: 0.3;
  border-radius: 0px 8px 0px 0px;

  &.prev {
    left: 0px;
    z-index: 2;
    background-image: url(${(p) => p.prev});
    cursor: pointer;
  }
  &.next {
    right: 0px;
    z-index: 2;
    background-image: url(${(p) => p.next});
    cursor: pointer;
  }
`;

const Image = styled("img")`
  width: inherit;
`;
