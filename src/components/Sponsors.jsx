import React from "react";
import "./Sponsors.scss";
import {
  blockflow,
  blocsocIcon,
  ethIndia23,
  huddle01,
  tablelandIcon,
  unfold23,
} from "../assets";

const Sponsors = () => {
  return (
    <div className="sponsor-outer-container">
      <div className="upper-round"></div>
      <div className="sponsor-container">
        <div className="title-container">
          <div className="title">
            <div>
              <h2 className="our">Hackathons </h2>
              <h2> Won</h2>
            </div>
          </div>
          <div className="sponsor-card-container">
            <div className="sponsor-card">
              <img src={ethIndia23} />
            </div>
            <div className="sponsor-card">
              <img src={unfold23} />
            </div>
            <div className="sponsor-card">
              <img src={huddle01} />
            </div>
          </div>
        </div>
        <div className="title-container">
          <div className="title">
            <div>
              <h2 className="our">OUR </h2>
              <h2>SPONSOR</h2>
            </div>
          </div>
          <div className="sponsor-card-container">
            <div className="sponsor-card">
              <img src={blockflow} />
            </div>
            <div className="sponsor-card">
              <img src={tablelandIcon} />
            </div>
            <div className="sponsor-card">
              <img src={blocsocIcon} />
            </div>
          </div>
        </div>
        <div className="title-container">
          <div className="title">
            <div>
              <h2 className="our">OUR </h2>
              <h2>PARTNERS</h2>
            </div>
          </div>
          <div className="sponsor-card-container">
            <div className="sponsor-card">
              <img src={blocsocIcon} />
            </div>
            <div className="sponsor-card">
              <img src={tablelandIcon} />
            </div>
            <div className="sponsor-card">
              <img src={blocsocIcon} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
