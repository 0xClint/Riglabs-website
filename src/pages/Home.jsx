import React from "react";
import {
  Connect,
  Features,
  Footer,
  Games,
  Header,
  Hero,
  Intro,
  Sponsors,
  Team,
} from "../components";
import HorizontalSlider from "../components/HorizontalSlider";

const Home = () => {
  return (
    <div>
      <div style={{ position: "absolute", zIndex: 10, width: "100%" }}>
        <Header />
      </div>
      <Hero />
      <HorizontalSlider />
      <Intro />
      <Games />
      <Connect />
      <Sponsors />
      <Features />
      <Team />
      <Footer />
    </div>
  );
};

export default Home;
