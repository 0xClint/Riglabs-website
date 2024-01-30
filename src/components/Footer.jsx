import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-outer-container">
      <div className="footer-container">
        <div className="footer-left">
          <div>LOGO</div>
          <p>
            Rig lab is an independent game studio making original games for PC,
            consoles, and mobile platforms.
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-right-item">
            <h3>Our Studio</h3>
            <div className="link-item">
              <Link className="link">About Us</Link>
              <Link className="link">Out Team</Link>
              <Link className="link">Our Games</Link>
              <Link className="link">Community</Link>
            </div>
          </div>
          <div className="footer-right-item">
            <h3>Services</h3>
            <div className="link-item">
              <Link className="link">About Us</Link>
              <Link className="link">Out Team</Link>
              <Link className="link">Our Games</Link>
              <Link className="link">Community</Link>
            </div>
          </div>
          <div className="footer-right-item">
            <h3>Support</h3>
            <div className="link-item">
              <Link className="link">About Us</Link>
              <Link className="link">Out Team</Link>
              <Link className="link">Our Games</Link>
              <Link className="link">Community</Link>
            </div>
          </div>
          <div className="footer-right-item">
            <h3>Say Hello</h3>
            <div className="link-item">
              <Link className="link">hi@riglabs.studio</Link>
              <Link className="link">+91 989450284</Link>
              <Link className="link">Our Games</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">© 2024 All rights reserved.</div>
    </div>
  );
};

export default Footer;
