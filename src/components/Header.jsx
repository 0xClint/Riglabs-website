import React from "react";
import "./Header.scss";
import { LogoImg } from "../assets";

const Header = () => {
  return (
    <div className="header-container" id="header">
      <div className="header-left">
        <img src={LogoImg} width={110} />
      </div>
      <div className="header-middle">
        <a href="#header">
          <li className="middle-item">Home</li>
        </a>
        <a href="#games">
          <li className="middle-item">Games</li>
        </a>
        <a href="#explore">
          <li className="middle-item">Explore</li>
        </a>
        <a href="#team">
          <li className="middle-item">Team</li>
        </a>
        <a href="#footer">
          <li className="middle-item">Contact</li>
        </a>
      </div>
      <div className="header-right">
        <button className="btn">Donate</button>
      </div>
    </div>
  );
};

export default Header;
