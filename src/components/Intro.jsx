import React from "react";
import "./Intro.scss";

const Intro = () => {
  return (
    <div className="intro-outer-container">
      <div className="upper-round"></div>
      <div className="intro-container">
        <div className="intro-left">
          <h2 className="intro-left-heading">
            WE ARE A WEB3 GAME STUDIO, CONNNECTING PEOPLE TO THEIR LOCAL LAND
            <span style={{ color: "black" }}> "KNOW THYSELF"</span>
          </h2>
          <h4> - SOCRATES</h4>
          <div className="intro-left-details">
            <div className="intro-left-photo">
              <img />
            </div>
            <div className="intro-left-content">
              <p>
                Built by IITians, started with a small team of two for fun!.
                Placerat in egestas erat imperdiet sed. Libero id faucibus nisl
                tincidunt eget nullam non nisi.
              </p>
              <p>
                Eu feugiat pretium nibh ipsum. Egestas purus viverra accumsan in
                nisl nisi scelerisque eu ultrices. In ornare quam viverra orci
                sagittis. Aliquam id diam maecenas ultricies mi eget mauris. or
                eget dolor morbi non arcu. Curabitur gravida arcu ac tortor.
              </p>
              <button className="btn-secondary">More About Us</button>
            </div>
          </div>
        </div>
        <div className="intro-right">
          <div className="intro-right-item">
            <div>4+</div>
            <p>Hackathon wins</p>
          </div>
          <div className="intro-right-item">
            <div>5+</div>
            <p>Sponsors</p>
          </div>
          <div className="intro-right-item">
            <div>10+</div>
            <p>Community partners</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
