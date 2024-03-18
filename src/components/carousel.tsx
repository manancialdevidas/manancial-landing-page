"use client";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

import LazyImage from "./lazy-image";

type CarouselProps = { className: string; images: string[]; autoplay: boolean };

export default function Carousel({ images, autoplay, className }: CarouselProps) {
  const autoplayOptions = {
    delay: 3500,
    disableOnInteraction: true,
    pauseOnMouseEnter: true,
  };

  return (
    <>
      <Swiper autoplay={autoplay ? autoplayOptions : false} pagination={true} loop={true} modules={[Pagination, Autoplay]} className={`mySwiper ${className}`}>
        {images.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <LazyImage src={img} alt="Imagem" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
