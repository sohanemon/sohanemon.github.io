import React from "react";
import image1 from "../../vector/black.png";
import crown from "../../img/crown.png";
import thumbup from "../../img/thumbup.png";
import glassesimoji from "../../img/glassesimoji.png";
import { motion } from "framer-motion";
import {
  AiFillGithub,
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { IconContext } from "react-icons";

export const socialIcon = (className, size) => {
  return (
    <div className=" flex flex-row gap-8 ">
      <IconContext.Provider
        value={{
          className: `${className}`,
          // style: { strokeWidth: "145px" },
          size: `${size}rem`,
        }}
      >
        <a href="">
          <AiFillGithub />
        </a>
        <a href="">
          <AiFillTwitterCircle />
        </a>
        <a href="">
          <AiFillYoutube />
        </a>
        <a href="">
          <AiFillInstagram />
        </a>
      </IconContext.Provider>
    </div>
  );
};

export const hireMeBtn = (
  <button className="button max-w-[100px]">Hire me</button>
);

const inView = {
  opacity: 1,
  transition: { type: "spring", duration: 2 },
  x: 0,
};

const Intro = () => {
  return (
    <>
      <div className="flex font-[Gumela] mt-24 mx-12 ">
        <div className="flex flex-col gap-y-24  flex-1">
          <div className="font-semibold">
            <p className="text-7xl  text-slate-800 ">Hello, itz</p>
            <p className="text-8xl  text-orange-300">Sohan Emon</p>
            <p className="text-slate-400 font-mono">
              Full stack web developer with high experiences in designing and
              developing...
            </p>
          </div>

          {hireMeBtn}
          {socialIcon(
            "hover:fill-orange-400 fill-white stroke-orange-400 stroke-[40px] hover:scale-110",
            3
          )}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={inView}
          className="flex-1 relative "
        >
          <img src={image1} alt="Emon" />
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={inView}
            className="absolute right-0 top-6"
          >
            {card(crown, "Boss", "Developer")}
          </motion.div>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={inView}
            className="absolute  bottom-16"
          >
            {card(thumbup, "Pro", "Designer")}
          </motion.div>
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            whileInView={inView}
            className="absolute top-0  w-36"
            src={glassesimoji}
            alt="imoji"
          />
        </motion.div>
      </div>
    </>
  );
};

const card = (icon, text1, text2) => {
  return (
    <div className="flex justify-around w-44 h-24 items-center shadow-lg rounded-xl px-4 z-50 bg-white ">
      <img className="h-12" src={icon} alt={text1 + text2} />
      <div className="font-sans font-semibold ">
        <p className="">{text1}</p>
        <p>{text2}</p>
      </div>
    </div>
  );
};

export default Intro;
