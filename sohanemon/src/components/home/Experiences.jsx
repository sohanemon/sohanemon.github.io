import React from "react";
import { motion } from "framer-motion";
const Experiences = () => {
  return (
    <div className="flex justify-evenly md:justify-center items-center 4 md:gap-24">
      {circle(3, "Years", "Experience")}
      {circle(5, "Running", "Projects")}
      {circle(30, "Completed", "Projects")}
    </div>
  );
};

const circle = (num, text1, text2) => {
  return (
    <div
      id="experiences"
      className="flex flex-col items-center  text-lg justify-around font-semibold my-32  md:h-[30vh]"
    >
      <motion.div
        whileInView={{ rotate: 360 }}
        transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
        viewport={{ once: true }}
        className=" rounded-full p-2 bg-gradient-to-r from-orange-500 to-sky-400"
      >
        <motion.div
          initial={{ rotate: 360 }}
          whileInView={{ rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
          className="bg-white rounded-full w-24 h-24 flex justify-center items-center"
        >
          <p className="font-bold ml-1 text-2xl text-slate-700">
            {num}
            <span className="text-3xl">+</span>
          </p>
        </motion.div>
      </motion.div>
      <div className="text-center">
        <p className="text-slate-700 font-mono">{text1}</p>
        <p className="text-orange-500 text-xl">{text2}</p>
      </div>
    </div>
  );
};
export default Experiences;
