import React from "react";
export const style = {
  li: "font-thin cursor-pointer hover:text-orange-300 hover:font-extrabold ",
  button:
    "bg-orange-300 hover:ring-orange-300  ring-1 ring-transparent text-white rounded-3xl px-3 py-2  bg-gradient-to-r from-orange-300 to-orange-400 hover:from-white hover:to-white shadow-xl hover:shadow-transparent  shadow-orange-300",
};
export const button = style.li + style.button;
const Navbar = () => {
  return (
    <div className="flex font-[Gumela] justify-between items-center h-[10vh]  text-slate-600 mx-12">
      <div className="flex-1 font-extrabold text-2xl">SohanEmon</div>
      <div className=" flex-1 ">
        <ul className="flex flex-row list-none gap-6 justify-center items-center">
          <li className={style.li}>Home</li>
          <li className={style.li}>Servies</li>
          <li className={style.li}>Portfolio</li>
          <li className={style.li}>Experience</li>
          <li className={style.li}>Testimonial</li>{" "}
          <button className={button}>Contact Me</button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
