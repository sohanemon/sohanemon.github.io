import React from "react";
import humble from "../../img/humble.png";
import glasses from "../../img/glasses.png";
import heartemoji from "../../img/heartemoji.png";

const Services = () => {
  return (
    <div className="flex h-[70vh] mt-32">
      <div className=" flex flex-col m-12 gap-4 my-32 ">
        <div className="font-bold font-[Gumela]">
          <p className="text1">Available</p> <p className="text2"> Services</p>{" "}
        </div>
        <div>
          <p className="text3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum,
            accusantium aliquid
          </p>
        </div>
        <div>
          <button className="button max-w-md mt-10">Download CV</button>
        </div>
      </div>
      <div className="relative flex-1">
        <div className="absolute top-0 right-10 ">
          {card(heartemoji, "Design", "Figma, Adobe XD, Photoshop")}
        </div>
        <div className="absolute top-1/4 left-2">
          {card(
            glasses,
            "Develop",
            "Javascript, React, Laravel, Node, Express"
          )}
        </div>
        <div className="absolute bottom-10 right-20">
          {card(humble, "UI/UX", "Sketch, MockUP")}
        </div>
      </div>
    </div>
  );
};
const card = (icon, text1, text2) => {
  return (
    <div className="flex flex-col h-60 w-52 ring-4 shadow-xl ring-orange-200 justify-center text-center items-center drop-shadow-xl rounded-xl px-4 z-50 bg-white ">
      <img className="h-24" src={icon} alt={text1 + text2} />
      <div className="font-sans font-semibold ">
        <p className="text-xl font-serif text-slate-800">{text1}</p>
        <p className="text-xs font-mono text-slate-400">{text2}</p>
      </div>
      <button className="text-sm font-serif hover:text-blue-500 hover:bg-blue-200 text-blue-400 my-3 px-2 py-1 rounded-xl">
        Learn more
      </button>
    </div>
  );
};
export default Services;
