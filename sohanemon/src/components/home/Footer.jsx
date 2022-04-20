import React from "react";

import { socialIcon } from "./Intro";
const Footer = () => {
  return (
    <div className="h-[30vh] bg-orange-300 w-screen flex flex-col items-center justify-evenly ">
      <a href="mailto:sohanemon@yahoo.com " className="">
        <p className="text-white font-semibold tracking-widest text-lg text-center ">
          sohanemon@yahoo.com
        </p>
      </a>
      {socialIcon(
        "hover:fill-orange-300 hover:stroke-white hover:stroke-[40px]  fill-white ",
        3.5
      )}
    </div>
  );
};

export default Footer;
