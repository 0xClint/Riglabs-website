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

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Intro />
      <Games />
      <Connect />
      <Features />
      <Team />
      <Sponsors />
      <Footer />
    </div>
  );
};

export default Home;
