import React from "react";
import "./Intro.scss";
import { riglabOffice } from "../assets";

const Intro = () => {
  return (
    <div className="intro-outer-container" id="intro">
      <div className="upper-round"></div>
      <div className="intro-container">
        <div className="intro-left">
          <h2 className="intro-left-heading">
            WE ARE A WEB3 GAME STUDIO, CONNNECTING PEOPLE TO THEIR LOCAL LAND
            <span style={{ color: "black" }}> "KNOW THYSELF"</span>
          </h2>
          <h4> - Socrates</h4>
          <div className="intro-left-details">
            <div className="intro-left-photo">
              <img src={riglabOffice} />
            </div>
            <div className="intro-left-content">
              {/* <p>
                Built by IITians, started with a small team of two for fun!.
                Placerat in egestas erat imperdiet sed. Libero id faucibus nisl
                tincidunt eget nullam non nisi.
              </p> */}
              <p>
                RIG Labs started as a beacon of creativity within the hackathon
                circuit, quickly distinguishing themselves with three notable
                victories, including two grand winner titles. This early
                success, born from a blend of innovation and passion for gaming,
                laid the foundation for a broader vision that transcended
                traditional game development. Recognizing the untapped potential
                within Asia's web3 gaming sphere, particularly in India's rich
                mosaic of cultures and landscapes, RIG Labs embarked on a
                mission to weave these diverse narratives into immersive gaming
                experiences. Their goal: to craft stories that not only
                entertain but also unite players across the world, showcasing
                the power of games to bridge cultural divides and foster global
                connections.
              </p>
              <a href="#team">
                <button className="btn-secondary">More About Us</button>
              </a>
            </div>
          </div>
        </div>
        <div className="intro-right">
          <div className="intro-right-item">
            <div>4+</div>
            <p>Hackathon wins</p>
          </div>
          <div className="intro-right-item">
            <div>2+</div>
            <p>Sponsors</p>
          </div>
          <div className="intro-right-item">
            <div>3+</div>
            <p>Community partners</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
