import React from "react";

const Experiences = () => {
  return (
    <div className="flex justify-center items-center gap-24">
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
      className="flex flex-col items-center text-lg justify-around font-semibold my-32 h-[30vh]"
    >
      <div className=" rounded-full p-2 bg-gradient-to-r from-orange-500 to-sky-400">
        <div className="bg-white rounded-full w-24 h-24 flex justify-center items-center">
          <p className="font-bold ml-1 text-2xl text-slate-700">
            {num}
            <span className="text-3xl">+</span>
          </p>
        </div>
      </div>
      <div className="text-center">
        <p className="text-slate-700 font-mono">{text1}</p>
        <p className="text-orange-500 text-xl">{text2}</p>
      </div>
    </div>
  );
};
export default Experiences;
