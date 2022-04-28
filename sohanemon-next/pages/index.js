import Head from "next/head";
import React, { createContext, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Experiences from "../components/Experiences";
import Services from "../components/Services";
import Footer from "../components/Footer";
import Connect from "../components/Connect";
import Workplaces from "../components/Workplaces";
import Reviews from "../components/Reviews";
import Portfolio from "../components/Portfolio";
import Intro from "../components/Intro";
const variants = {
  initial: "",
  inView: "",
  animate: "",
};
const ThemeContext = createContext();
export default function Home() {
  let [darkMode, setDarkMode] = useState(true);
  return (
    <>
      <Head>
        <title>@sohanemon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeContext.Provider value={{ setDarkMode, darkMode }}>
        <div className={darkMode && "dark"}>
          <motion.div
            className=" dark:bg-slate-900"
            variants={variants}
            initial="initial"
            whileInView="whileInView"
            animate="animate"
          >
            <Navbar />
            <Intro />
            <Services />
            <Experiences />
            <Workplaces />
            <Portfolio />
            <Reviews />
            <Connect />
            <Footer />
          </motion.div>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export { ThemeContext };
