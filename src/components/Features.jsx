import React from "react";
import "./Features.scss";

const Features = () => {
  return (
    <div className="features-container">
      <div className="features-left">
        <div className="features-left-content">
          <div className="features-item">
            <div className="features-item-left">
              <img />
            </div>
            <div className="features-item-right">
              <h2>GAME DEVELOPMENT</h2>
              <p>
                Our works have been internationally recognized for their design,
                stories and art direction. Together, we can transform your ideas
                into captivating games, on desktop, mobile or console.
              </p>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="features-item">
            <div className="features-item-left">
              <img />
            </div>
            <div className="features-item-right">
              <h2>GAME DEVELOPMENT</h2>
              <p>
                Our works have been internationally recognized for their design,
                stories and art direction. Together, we can transform your ideas
                into captivating games, on desktop, mobile or console.
              </p>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="features-item">
            <div className="features-item-left">
              <img />
            </div>
            <div className="features-item-right">
              <h2>GAME DEVELOPMENT</h2>
              <p>
                Our works have been internationally recognized for their design,
                stories and art direction. Together, we can transform your ideas
                into captivating games, on desktop, mobile or console.
              </p>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
        </div>
      </div>
      <div className="features-right">
        <div className="features-right-inner">
          <h2 className="our">OUR</h2>
          <h2>CAPABILITIES</h2>
          <p>
            <div>
              Games are a language of storytelling. We’re looking for games that
              develop and expand this language.
            </div>
          </p>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Features;
