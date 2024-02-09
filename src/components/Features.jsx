import React from "react";
import "./Features.scss";
import { blockchainIcon, modelIcon, peopleIcon } from "../assets";

const Features = () => {
  return (
    <div className="features-container">
      <div className="features-left">
        <div className="features-left-content">
          <div className="features-item">
            <div className="features-item-left">
              <img src={blockchainIcon} />
            </div>
            <div className="features-item-right">
              <h2>WEB3 GAME DEV</h2>
              <p>
                Riglabs pioneers Web3 gaming, blending blockchain tech with
                captivating narratives for immersive experiences. Our commitment
                to innovation pushes boundaries, redefining player interaction
                in decentralized entertainment.
              </p>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="features-item">
            <div className="features-item-left">
              <img src={modelIcon} />
            </div>
            <div className="features-item-right">
              <h2>3D ANIMATION</h2>
              <p>
                With state-of-the-art techniques, Riglabs crafts visually
                stunning worlds and characters. Each frame is meticulously
                designed to evoke emotion and spark imagination, delivering
                unparalleled visual experiences.
              </p>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="features-item">
            <div className="features-item-left">
              <img src={peopleIcon} />
            </div>
            <div className="features-item-right">
              <h2>OUR CULTURE</h2>
              <p>
                At Riglabs, diversity and inclusivity are celebrated, fostering
                a dynamic environment where every voice matters. Passion drives
                our collaborative team, shaping a culture defined by excellence,
                integrity, and fun.
              </p>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="features-right">
        <div className="features-right-inner">
          <h2 className="our">OUR</h2>
          <h2>STRENGTHS</h2>
          <p>
            <div>
              Riglabs combines cutting-edge technology and creative storytelling
              to craft immersive experiences that captivate audiences of all
              ages.
            </div>
          </p>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Features;
