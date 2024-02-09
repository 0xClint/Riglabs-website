import React from "react";
import "./Hero.scss";
import { introVideo } from "../assets";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <p className="heading1">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("WE BUIDL")
                .pauseFor(1000)
                .deleteAll()
                .typeString("THAT FEELS")
                .start();
            }}
          />
        </p>
        <div className="heading2">
          {/* <div className="element"></div> */}
          <p>GAMES</p>
        </div>

        <h3>Building for victors!</h3>
        <a href="#games">
          <button className="btn">Our Games</button>
        </a>
      </div>
      <div className="video-container">
        <video autoPlay muted loop src={introVideo} className="" />
      </div>
    </div>
  );
};

export default Hero;
