import React from "react";
import { useEffect, useState } from "react";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { Autoplay } from "swiper";

import { motion } from "framer-motion";
import profile1 from "../assets/img/profile1.jpg";
import profile2 from "../assets/img/profile2.jpg";
import profile3 from "../assets/img/profile3.jpg";
import profile4 from "../assets/img/profile4.jpg";
import profile5 from "../assets/img/profile5.jpg";
import profile6 from "../assets/img/profile6.jpg";

const Reviews = () => {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    setReviews(
      [
        {
          icon: profile1,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, ratione laborum! Sit quia sint ut, odit aperiam corporis laboriosam quod adipisci culpa similique non hic earum laborum! Consequuntur, temporibus inventore!",
        },
        {
          icon: profile2,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, ratione laborum! Sit quia sint ut, odit aperiam corporis laboriosam quod adipisci culpa similique non hic earum laborum! Consequuntur, temporibus inventore!",
        },
        {
          icon: profile3,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, ratione laborum! Sit quia sint ut, odit aperiam corporis laboriosam quod adipisci culpa similique non hic earum laborum! Consequuntur, temporibus inventore!",
        },
        {
          icon: profile4,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, ratione laborum! Sit quia sint ut, odit aperiam corporis laboriosam quod adipisci culpa similique non hic earum laborum! Consequuntur, temporibus inventore!",
        },
        {
          icon: profile5,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, ratione laborum! Sit quia sint ut, odit aperiam corporis laboriosam quod adipisci culpa similique non hic earum laborum! Consequuntur, temporibus inventore!",
        },
        {
          icon: profile6,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa, ratione laborum! Sit quia sint ut, odit aperiam corporis laboriosam quod adipisci culpa similique non hic earum laborum! Consequuntur, temporibus inventore!",
        },
      ].map((e, i) => (
        <SwiperSlide
          key={i}
          className="flex flex-col items-center border-4  border-slate-300 rounded-lg p-6  gap-5"
        >
          <Image className="rounded-full w-32 h-32" src={e.icon} alt="" />
          <p className="text3 text-lg dark:text-slate-300">{e.review}</p>
        </SwiperSlide>
      ))
    );
  }, []);
  return (
    <div id="" className="p-10 mb-56 sm:mb-32 md:mb-0">
      <p className="text1 text-4xl text-center dark:text-slate-100">
        All the{" "}
        <motion.span
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
          viewport={{ once: true }}
          className="text2 text-4xl inline-block"
        >
          Exceptional
        </motion.span>
        Reviews
      </p>
      <br />
      <Swiper
        className=" w-full p-1"
        modules={[Pagination, Autoplay]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop={true}
        slidesPerView={1}
        grabCursor={true}
      >
        {reviews}
      </Swiper>
    </div>
  );
};

export default Reviews;
