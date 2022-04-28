import { motion } from "framer-motion";

import Image from "next/image";
import React from "react";
import humble from "../assets/img/humble.png";
import glasses from "../assets/img/glasses.png";
import heartemoji from "../assets/img/heartemoji.png";

const Services = () => {
  return (
    <div
      id="services"
      className="flex flex-col md:flex-row  md:h-[100vh] md:mt-32"
    >
      <div className=" flex flex-col flex-1 m-12 gap-4 my-32 ">
        <div className="font-bold font-[Gumela]">
          <p className="text1 dark:text-slate-100">Available</p>{" "}
          <p className="text2"> Services</p>{" "}
        </div>
        <div>
          <p className="text3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
          </p>
        </div>
        <div>
          <motion.button
            animate={{
              scale: 1.05,
              transition: { duration: 1, yoyo: Infinity },
            }}
            className="button max-w-md mt-10"
          >
            Download CV
          </motion.button>
        </div>
      </div>
      <div className="relative flex-1 ">
        <div className=" md:absolute top-0 right-[10%] ">
          {card(heartemoji, "Design", "Figma, Adobe XD, Photoshop", 100, 0)}
        </div>
        <div className=" md:absolute top-1/4 left-[0%]">
          {card(
            glasses,
            "Develop",
            "Javascript, React, Laravel, Node, Express",
            -100,
            0
          )}
        </div>
        <div className=" md:absolute top-1/2 right-[25%]">
          {card(humble, "UI/UX", "Sketch, MockUP", 0, 100)}
        </div>
      </div>
    </div>
  );
};
const card = (icon, text1, text2, x, y) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: `${x}`, y: `${y}` }}
      // initial={{ x: -100 }}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      transition={{ duration: 3, type: "spring" }}
      viewport={{ once: true }}
      className="flex flex-col items-center  lg:h-60 md:w-52 w-1/2 mx-auto my-10 ring-4 shadow-xl ring-orange-200 justify-center text-center  drop-shadow-xl rounded-xl  z-50 bg-white dark:bg-slate-700 "
    >
      <Image className="h-24" src={icon} alt={text1 + text2} />
      <div className="font-sans font-semibold ">
        <p className="text-xl font-serif text-slate-800 dark:text-slate-100">
          {text1}
        </p>
        <p className="text-xs font-mono text-slate-400">{text2}</p>
      </div>
      <button className="text-sm font-serif hover:text-blue-500 hover:bg-blue-200 text-blue-400 my-3 px-2 py-1 rounded-xl">
        Learn more
      </button>
    </motion.div>
  );
};
export default Services;
