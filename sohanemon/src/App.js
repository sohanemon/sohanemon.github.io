import Navbar from "./components/nav/Navbar";
import Home from "./components/home/Home";
import React, { createContext, useState } from "react";
import { motion } from "framer-motion";
const variants = {
  initial: "",
  inView: "",
  animate: "",
};
const ThemeContext = createContext();

function App() {
  let [darkMode, setDarkMode] = useState(true);
  return (
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
          <Home />
        </motion.div>
      </div>{" "}
    </ThemeContext.Provider>
  );
}
export { ThemeContext };
export default App;
