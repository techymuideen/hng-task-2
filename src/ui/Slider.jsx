import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const SliderContainer = styled.div`
  max-width: 100%;
  height: 100%;
  background-color: brown;
  margin: 0 auto;
  color: #fff;
  display: flex;
  border-radius: var(--border-radius-tiny);
`;

const SliderImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: var(--border-radius-tiny);

  @media (max-width: 650px) {
    object-fit: cover;
    height: 100%;
    max-width: 100%;
  }
`;

const images = [
  "/promo1.avif",
  "/promo2.avif",
  "/promo3.avif",
  "/promo4.avif",
  "/promo5.avif",
];

const Slider = () => {
  return (
    <SliderContainer>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 1000 }}
        pagination={{ clickable: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <SliderImage src={image} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
        <div className="swiper-pagination"></div>
      </Swiper>
    </SliderContainer>
  );
};

export default Slider;
