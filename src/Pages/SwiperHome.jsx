import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import skillLogo from "../assets/Skills-Grow.jpg";
import webDev from "../assets/web-development.jpeg";
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
      >
        <SwiperSlide>
          <div className="relative flex items-center justify-center">
            <img
              className="w-full h-[230px] sm:h-[380px] md:h-[670px] object-cover shadow-md"
              src={webDev}
              alt="Web Development"
            />

            <div className="absolute  flex flex-col items-center justify-center text-center px-4">
              <p className="text-white text-sm sm:text-lg md:text-2xl font-semibold drop-shadow-lg mb-4">
                Master Modern Web Development Skills
              </p>
              <button className="bg-secondary text-white px-4 py-2 rounded-md text-xs sm:text-sm md:text-base shadow-md">
                Explore Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative flex items-center justify-center">
            <img
              className="w-full h-[230px] sm:h-[380px] md:h-[670px] object-cover shadow-md"
              src={drawing}
              alt="Drawing"
            />

            <div className="absolute  flex flex-col items-center justify-center text-center px-4">
              <p className="text-white text-sm sm:text-lg md:text-2xl font-semibold drop-shadow-lg mb-4">
                Improve Your Drawing Techniques
              </p>
              <button className="bg-secondary text-white px-4 py-2 rounded-md text-xs sm:text-sm md:text-base shadow-md">
                Explore Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative flex items-center justify-center">
            <img
              className="w-full h-[230px] sm:h-[380px] md:h-[670px] object-cover shadow-md"
              src="https://thomaskinkadeca.com/wp-content/uploads/bigsur-painting-1000.jpg"
              alt="Painting"
            />

            <div className="absolute flex flex-col items-center justify-center text-center px-4">
              <p className="text-white text-sm sm:text-lg md:text-2xl font-semibold drop-shadow-lg mb-4">
                Explore Painting & Color Techniques
              </p>
              <button className="bg-secondary text-white px-4 py-2 rounded-md text-xs sm:text-sm md:text-base shadow-md">
                Explore Now
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative flex items-center justify-center">
            <img
              className="w-full h-[230px] sm:h-[380px] md:h-[670px] object-cover shadow-md"
              src={skillLogo}
              alt="Soil Art"
            />

            <div className="absolute flex flex-col items-center justify-center text-center px-4">
              <p className="text-white text-sm sm:text-lg md:text-2xl font-semibold drop-shadow-lg mb-4">
                Create Beautiful Crafts Using Soil & Clay
              </p>
              <button className="bg-secondary text-white px-4 py-2 rounded-md text-xs sm:text-sm md:text-base shadow-md">
                Explore Now
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperHome;
