import React from "react";
import { motion } from "framer-motion";
export const style = {
  li: "font-thin cursor-pointer hover:text-orange-300 hover:font-extrabold ",
};

export const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i) => {
    const delay = 0.5 + i * 0.5;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 7, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};
export const seSvg = (size) => (
  <svg
    className="stroke-orange-400 stroke-[8px] hover:fill-orange-400 hover:scale-105 hover:stroke-transparent fill-transparent"
    width={size}
    height={size}
    viewBox="0 0 207 328"
    xmlns="http://www.w3.org/2000/svg"
  >
    <motion.path
      initial="hidden"
      variants={draw}
      animate="visible"
      custom={2}
      d="M14 164V107.5H97V196.5L69.5 169V134.5H41V151.5L97 207V326.5L14 219.5V174.5L42 201.5V210L69.5 245.5V219.5L14 164Z"
    />
    <motion.path
      initial="hidden"
      variants={draw}
      animate="visible"
      custom={2}
      d="M110 326.5V107.5H193V156H166V134.5H165H137.5V171H193V199H137.5V245.5L147.5 232H183L110 326.5Z"
    />
    <motion.path
      initial="hidden"
      variants={draw}
      animate="visible"
      custom={1}
      d="M170 94H37.5H37L36 92L35 89.5L33 85.5L30.5 81L27 75L23.5 69.5L20.5 65.5L17 61.5L13.5 57.5L11.5 55.5L10.5 54.5L10 54H9.5H7.5H6L4.5 53.5L3 52.5L1.5 51L1 49L1.5 47L2.5 45.5L3.5 44.5L5 43.5L7 43H8.5L10.5 43.5L12 44.5L13.5 46.5L14 48.5V50.5L13.5 51.5L12.5 52.5L11.6467 53.1467L12 53.5L15 56.5L20.5 61.5L25 65.5L30 69L34.5 71L38 71.5L41.5 70.5L44 69L46.5 66.5L48 64.5L48.5 62V51V48.5L48 45L47 40.5L46 35.5L45.5 33.5L45 32L44.5 31H44H41.5L39 30L37 29L35.5 27.5L34.5 25.5V22.5L36 20L38 18.5L40.5 17.5H43.5L46.5 18.5L48.5 20.5L50 22L50.5 24.5L50 26.5L49 28.5L46.5 30V32L48 35L51 39L55.5 45.5L59.5 51L64 55.5L68 59L72.5 61.5L77.5 62L82 61.5L85 60.5L88.5 57L92.5 52.5L94.5 48L96.5 42.5L98.5 36.5L100.5 31.5L101.5 26L102 22.5L102.5 19.5V17L100.5 16L98 14.5L96.5 13.5L95.5 11.5L94.5 9L95.5 6L97 4L98 2.5L100 2L102.5 1H104.5L107 1.5L109 3L111.5 5L113 7L112.5 11L111 13.5L109 16L105.5 17V22.5L107.5 29L109.5 35.5L111.5 43.5L114.5 49.5L117.5 55L121.5 59.5L125 62H128H130.5L133 60.5L138 58L141 55.5L144.5 53L147.5 50L151 47L155.5 41.5L159 37L161.5 31L160.5 30L159 28L157 26V22.5L158 20.5L160.5 18.5L164 17L167.5 17.5L170 19L171.5 20.5L173 23V26L171.5 28.5L169.5 30.5L166.5 31.5H163L162 35L161 39.5L160 43.5L158.5 50.5V55.5L159 60.5L160 64L162 66.5L164 69L168 71H172L175 70L178.5 68L185.5 63L195.5 53L193.5 50.5V48L194.5 45.5L196 44.5L198.5 43L201.5 43.5L204 45L205.5 47.5L206 50L204.5 53L201.5 54.5H198.5L197 54L184 69.5L181.5 73L170 94Z"
    />
  </svg>
);
export const button = style.li + style.button;
const Navbar = () => {
  return (
    <div className="flex font-[Gumela]  items-center h-[10vh]  text-slate-600  my-4  mx-12">
      <div className="flex flex-1 font-extrabold justify-center lg:justify-start text-2xl items-center">
        <div> {seSvg(80)}</div>
        <div className="text-orange-400">SohanEmon</div>
      </div>
      <div className=" flex-1 hidden lg:inline-block  ">
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
