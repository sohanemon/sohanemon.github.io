import React from "react";
import Connect from "./Connect";
import Experiences from "./Experiences";
import Footer from "./Footer";
import Intro from "./Intro";
import Portfolio from "./Portfolio";
import Reviews from "./Reviews";
import Services from "./Services";
import Workplaces from "./Workplaces";

const Home = () => {
  return (
    <>
      <Intro />
      <Services />
      <Experiences />
      <Workplaces />
      <Portfolio />
      <Reviews />
      <Connect />
      <Footer />
    </>
  );
};

export default Home;
