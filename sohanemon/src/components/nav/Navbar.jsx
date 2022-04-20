import React from "react";
export const style = {
  li: "font-thin cursor-pointer hover:text-orange-300 hover:font-extrabold ",
};
export const button = style.li + style.button;
const Navbar = () => {
  return (
    <div className="flex font-[Gumela] justify-between items-center h-[10vh]  text-slate-600 mx-12">
      <div className="flex-1 font-extrabold text-2xl">SohanEmon</div>
      <div className=" flex-1 ">
        <ul className="flex flex-row list-none gap-6 justify-center items-center">
          <li className={style.li}>
            <a href="#">Home</a>
          </li>
          <li className={style.li}>
            <a href="#">Servies</a>
          </li>
          <li className={style.li}>
            <a href="#">Portfolio</a>
          </li>
          <li className={style.li}>
            <a href="#experiences">Experience</a>
          </li>
          <li className={style.li}>
            <a href="#">Testimonial</a>
          </li>{" "}
          <button className="button">Contact Me</button>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
