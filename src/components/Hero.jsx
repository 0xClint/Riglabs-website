import React from "react";
import "./Hero.scss";
import { introVideo } from "../assets";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <p className="heading1">WE BUIDL</p>
        <div className="heading2">
          <div className="element"></div>
          <p>GAMES</p>
        </div>
        <h3>
          Lorem ipsum dolor sit amet consectetur adipiscing diam tortor sit
          feugiat dictum eu diam
        </h3>
        <button className="btn">Our Games</button>
      </div>
      <video autoPlay muted loop src={introVideo} className="" />
    </div>
  );
};

export default Hero;
