import React from "react";
import {
  Connect,
  Features,
  Footer,
  Games,
  Header,
  Hero,
  Intro,
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
      <Footer />
    </div>
  );
};

export default Home;
