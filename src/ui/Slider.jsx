import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import SlideImage1 from "../../public/promo1.avif";
import SlideImage2 from "../../public/promo2.avif";
import SlideImage3 from "../../public/promo3.avif";
import SlideImage4 from "../../public/promo4.avif";
import SlideImage5 from "../../public/promo5.avif";

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
  SlideImage1,
  SlideImage2,
  SlideImage3,
  SlideImage4,
  SlideImage5,
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
