import React from "react";
import "./Team.scss";
import { clintImg } from "../assets";

const Team = () => {
  return (
    <div className="team-container">
      <div className="team-title">
        <div>
          <h2 className="our">OUR </h2>
          <h2>TEAM</h2>
        </div>
        <button className="btn">view all games</button>
      </div>
      <div className="team-card-container">
        <div className="team-card">
          <img src={clintImg} />
          <div className="title">
            <h2>Shivam</h2>
            <p>posi</p>
          </div>
        </div>
        <div className="team-card">
          <img src={clintImg} />
          <div className="title">
            <h2>Omkar</h2>
            <p>posi</p>
          </div>
        </div>
        <div className="team-card">
          <img src={clintImg} />
          <div className="title">
            <h2>Vansh</h2>
            <p>posi</p>
          </div>
        </div>
        <div className="team-card">
          <img src={clintImg} />
          <div className="title">
            <h2>Alok</h2>
            <p>posi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
