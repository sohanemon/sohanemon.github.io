import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import hoc from "../../img/hoc.png";
import ecommerce from "../../img/ecommerce.png";
import musicapp from "../../img/musicapp.png";
import sidebar from "../../img/sidebar.png";
import "swiper/css";

const projects = [hoc, ecommerce, musicapp, sidebar];
const Portfolio = () => {
  return (
    <div className="m-24">
      <div className="text-center space-y-2">
        <p className="text1 text-5xl">Recent Projects</p>
        <p className="text2 text-3xl">Portfolio</p>
      </div>

      <Swiper
        className="container rounded-lg m-12"
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
      >
        {projects.map((e) => (
          <SwiperSlide className=" rounded-lg p-2 ">
            <img
              className="w-full rounded-lg filter drop-shadow-lg shadow-slate-100   "
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
