import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-left">LOGO</div>
      <div className="header-middle">
        <li className="middle-item">Home</li>
        <li className="middle-item">About Us</li>
        <li className="middle-item">Service</li>
        <li className="middle-item">Projects</li>
        <li className="middle-item">Blogs</li>
      </div>
      <div className="header-right">
        <button className="btn">Donate</button>
      </div>
    </div>
  );
};

export default Header;
