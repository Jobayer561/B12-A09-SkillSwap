import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import skillLogo from "../assets/Skills-Grow.jpg";
import wevDev from "../assets/web-development.jpeg";
import painting from "../assets/painting.jpg";
import drawing from "../assets/pexels-mokita-2154468682-34461164.jpg";

const SwiperHome = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        speed={800}
        className=""
      >
        <SwiperSlide>
          <div className="flex items-center justify-center">
            <img
              className="w-full md:h-[670px] object-cover shadow-md"
              src={wevDev}
              alt="Web Development"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center">
            <img
              className="w-full md:h-[670px] object-cover shadow-md"
              src={skillLogo}
              alt="Skill Logo"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center">
            <img
              className="w-full md:h-[670px] object-cover shadow-md"
              src={painting}
              alt="Painting"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex items-center justify-center">
            <img
              className="w-full md:h-[670px] object-cover shadow-md"
              src={drawing}
              alt="Drawing"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperHome;
