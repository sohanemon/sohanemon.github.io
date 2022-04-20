import Navbar from "./components/nav/Navbar";
import Home from "./components/home/Home";
import React from "react";
import { motion } from "framer-motion";
const variants = {
  initial: "",
  inView: "",
  animate: "",
};
function App() {
  return (
    <motion.div
      variants={variants}
      initial="initial"
      whileInView="whileInView"
      animate="animate"
    >
      <Navbar />
      <Home />
    </motion.div>
  );
}

export default App;
