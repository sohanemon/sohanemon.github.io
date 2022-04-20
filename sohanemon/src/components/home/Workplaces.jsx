import React from "react";
import { hireMeBtn } from "./Intro";
import amazon from "../../img/amazon.png";
import fiverr from "../../img/fiverr.png";
import facebook from "../../img/Facebook.png";
import upwork from "../../img/Upwork.png";
import shopify from "../../img/Shopify.png";

const Workplaces = () => {
  return (
    <div className="mx-12 flex mb-52 h-[50vh]">
      <div className="flex flex-1 flex-col gap-12">
        <div className="font-[Gumela]  font-semibold gap-4">
          <p className="text1 ">Workplaces</p>
          <p className="text2 ">Brands & Clients</p>
          <p className="text3 font-sans text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        {hireMeBtn}
      </div>
      {/* Right Side */}
      <div className="flex relative flex-1 flex-col justify-center items-center gap-y-6 ">
        {circle(facebook)}
        <div className="flex gap-x-6">
          {circle(fiverr)}
          {circle(amazon)}
          {circle(shopify)}
        </div>{" "}
        {circle(upwork)}
        <div className=" rounded-full h-72 bg-slate-50 w-72 absolute -z-10 filter drop-shadow-2xl shadow-slate-900"></div>
        <div className=" rounded-full h-52  bg-orange-300 right-20 bottom-6  w-52 absolute -z-20 filter drop-shadow-2xl shadow-slate-900"></div>
        <div className=" rounded-full h-52 bg-slate-300 w-52  right-20 top-6 absolute -z-20 filter drop-shadow-2xl shadow-slate-900"></div>
      </div>
    </div>
  );
};

const circle = (src, pos1) => {
  return (
    <div
      className={` ${pos1} ring-[6px  bg-white flex justify-center items-center  ring-gray-100 ring-offset-2 rounded-full h-28 w-28`}
    >
      <img className=" h-16 w-16" src={src} alt={`"${src}"`} />
    </div>
  );
};

export default Workplaces;
