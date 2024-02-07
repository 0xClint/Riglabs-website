import React from "react";
import "./Header.scss";
import { LogoImg } from "../assets";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">
        <img src={LogoImg} width={110} />
      </div>
      <div className="header-middle">
        <li className="middle-item">Home</li>
        <li className="middle-item">Games</li>
        <li className="middle-item">Explore</li>
        <li className="middle-item">Team</li>
        <li className="middle-item">Blogs</li>
      </div>
      <div className="header-right">
        <button className="btn">Donate</button>
      </div>
    </div>
  );
};

export default Header;
