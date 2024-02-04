import React from "react";
import "./Sponsors.scss";
import { blocsocIcon, tablelandIcon } from "../assets";

const Sponsors = () => {
  return (
    <div className="sponsor-container">
      <div className="title-container">
        <div className="title">
          <div>
            <h2 className="our">Hackathon </h2>
            <h2> Won</h2>
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
      <div className="title-container">
        <div className="title">
          <div>
            <h2 className="our">OUR </h2>
            <h2>SPONSOR</h2>
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
      <div className="title-container">
        <div className="title">
          <div>
            <h2 className="our">OUR </h2>
            <h2>SPONSOR</h2>
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
  );
};

export default Sponsors;
