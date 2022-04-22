import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import hoc from "../../img/hoc.png";
import { Autoplay, Pagination, Navigation } from "swiper";
import ecommerce from "../../img/ecommerce.png";
import musicapp from "../../img/musicapp.png";
import sidebar from "../../img/sidebar.png";
import "swiper/css";
const projects = [hoc, ecommerce, musicapp, sidebar];
const Portfolio = () => {
  return (
    <div className="md:m-24">
      <div className="text-center space-y-2">
        <p className="text1 text-5xl">Recent Projects</p>
        <p className="text2 text-3xl">Portfolio</p>
      </div>
      <Swiper
        className="container rounded-lg m-12 swiper"
        navigation={true}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        grabCursor={true}
      >
        {projects.map((e) => (
          <SwiperSlide key={Math.random()} className=" rounded-lg p-2 ">
            <img
              className="w-full rounded-lg filter p-10 sm:p-0
               drop-shadow-lg shadow-slate-100   "
              src={e}
              alt=""
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Portfolio;
