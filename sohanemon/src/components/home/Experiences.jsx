import React from "react";

const Experiences = () => {
  return (
    <div className="flex justify-center items-center gap-24">
      {circle()}
      {circle()}
      {circle()}
    </div>
  );
};

const circle = () => {
  return (
    <div className="flex flex-col items-center text-lg justify-around font-semibold my-24 h-[30vh]">
      <div className=" rounded-full p-2 bg-gradient-to-r from-orange-500 to-sky-400">
        <div className="bg-white rounded-full w-24 h-24 flex justify-center items-center">
          <p className="font-bold ml-1 text-2xl text-slate-700">
            25<span className="text-3xl">+</span>
          </p>
        </div>
      </div>
      <div className="text-center">
        <p className="text-slate-700 font-mono">Years</p>
        <p className="text-orange-500 text-xl">Experince</p>
      </div>
    </div>
  );
};
export default Experiences;
