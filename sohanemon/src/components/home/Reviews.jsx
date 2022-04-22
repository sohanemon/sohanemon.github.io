import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { Autoplay } from "swiper";

import { motion } from "framer-motion";
import profile1 from "../../img/profile1.jpg";
import profile2 from "../../img/profile2.jpg";
import profile3 from "../../img/profile3.jpg";
import profile4 from "../../img/profile4.jpg";
import profile5 from "../../img/profile5.jpg";
import profile6 from "../../img/profile6.jpg";

const reviews = [
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
];
const Reviews = () => {
  return (
    <div className="p-10 mb-56 sm:mb-32 md:mb-0">
      <p className="text1 text-4xl text-center">
        All the{" "}
        <motion.p
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
          viewport={{ once: true }}
          className="text2 text-4xl inline-block"
        >
          Exceptional
        </motion.p>{" "}
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
        {reviews.map((e) => (
          <SwiperSlide className="flex flex-col items-center border-4  border-slate-300 rounded-lg p-6  gap-5">
            <img className="rounded-full w-32 h-32" src={e.icon} alt="" />
            <p className="text3 text-lg">{e.review}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Reviews;
