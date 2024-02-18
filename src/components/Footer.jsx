import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";
import { LogoImg, XIcon, discordIcon, linkedinIcon } from "../assets";

const Footer = () => {
  return (
    <div className="footer-outer-container" id="footer">
      <div className="footer-container">
        <div className="footer-left">
          <a href="#header">
            <div>
              <img src={LogoImg} width={110} />
            </div>
          </a>
          <p>
            Rig lab is an independent game studio making original games for PC,
            consoles, and mobile platforms.
          </p>
        </div>
        <div className="footer-right">
          <div className="footer-right-item">
            <h3>Our Studio</h3>
            <div className="link-item">
              <a className="link" href="#intro">
                About Us
              </a>
              <a className="link" href="#team">
                Our Team
              </a>
              <a className="link" href="#team">
                Our Games
              </a>
            </div>
          </div>
          <div className="footer-right-item">
            <h3>Strengths</h3>
            <div className="link-item">
              <a href="#web3gamedev" className="link">
                Web3 Game Dev
              </a>
              <a href="#3danimation" className="link">
                3D Animation
              </a>
              <a href="#culture" className="link">
                Our Culture
              </a>
            </div>
          </div>
          <div className="footer-right-item">
            <h3>Support</h3>
            <div className="link-item">
              <Link className="link">About Us</Link>
              <Link className="link">Out Team</Link>

              <Link className="link">Community</Link>
            </div>
          </div>
          <div className="footer-right-item">
            <h3>Say Hello</h3>
            <div className="link-item">
              <a className="link" href="mailto:hello@riglabs.studio">
                hello@riglabs.studio
              </a>
              <a className="link" href="#games">
                Our Games
              </a>
              <div className="socials">
                <h3>Socials</h3>
                <div className="social-container">
                  <a
                    href="https://www.linkedin.com/company/rig-labs"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <img src={linkedinIcon} width={30} fill={"#fffff"} alt="" />
                  </a>
                  {/* <a
                    href="https://discord.com/invite/UrGj7cAP"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <img src={discordIcon} width={30} fill={"#fffff"} alt="" />
                  </a> */}
                  <a
                    href="https://twitter.com/LabsRIG"
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    <img src={XIcon} width={30} fill={"#fffff"} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">© 2024 All rights reserved.</div>
    </div>
  );
};

export default Footer;
