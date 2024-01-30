import React from "react";
import "./Intro.scss";

const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-left">
        <h2 className="intro-left-heading">
          WE ARE THE GAME DEVELOPMENT STUDIO KNOWN FOR CRAFTING DISTINCTIVE AND
          <span style={{ color: "black" }}> IMMERSIVE GAMES</span> THAT STAND
          OUT IN THE MARKET.
        </h2>
        <div className="intro-left-details">
          <div className="intro-left-photo">
            <img />
          </div>
          <div className="intro-left-content">
            <p>
              Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Placerat in egestas
              erat imperdiet sed. Libero id faucibus nisl tincidunt eget nullam
              non nisi.
            </p>
            <p>
              Eu feugiat pretium nibh ipsum. Egestas purus viverra accumsan in
              nisl nisi scelerisque eu ultrices. In ornare quam viverra orci
              sagittis. Aliquam id diam maecenas ultricies mi eget mauris. or
              eget dolor morbi non arcu. Curabitur gravida arcu ac tortor.
            </p>
            <button className="btn-intro">More About Us</button>
          </div>
        </div>
      </div>
      <div className="intro-right">
        <div className="intro-right-item">
          <div>10+</div>
          <p>years experience working</p>
        </div>
        <div className="intro-right-item">
          <div>10+</div>
          <p>years experience working</p>
        </div>
        <div className="intro-right-item">
          <div>10+</div>
          <p>years experience working</p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
