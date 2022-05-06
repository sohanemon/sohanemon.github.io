import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import hoc from "../assets/img/hoc.png";
import { Autoplay, Pagination, Navigation } from "swiper";
import ecommerce from "../assets/img/ecommerce.png";
import musicapp from "../assets/img/musicapp.png";
import sidebar from "../assets/img/sidebar.png";
import { useEffect, useState } from "react";

const Portfolio = () => {
  const [projects, setProjects] = useState();
  useEffect(() => {
    setProjects(
      [hoc, ecommerce, musicapp, sidebar].map((e, i) => (
        <SwiperSlide key={i} className=" rounded-lg p-2 ">
          <Image
            height={200}
            width={400}
            className="w-full rounded-lg filter p-10
               drop-shadow-lg shadow-slate-100   "
            src={e}
            alt=""
          />
        </SwiperSlide>
      ))
    );
  }, []);

  return (
    <div className=" m-0 md:m-24">
      <div className="text-center space-y-2">
        <p className="text1 text-5xl dark:text-slate-100">Recent Projects</p>
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
        {projects}
      </Swiper>
    </div>
  );
};

export default Portfolio;
