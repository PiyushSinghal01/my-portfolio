import React from "react";
import "./Footer.css";
// import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";
import theme_pattern from "../../assets/theme_pattern.svg"

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <div className="footer-title">
            <h1>Piyush</h1>
            <img src={theme_pattern} alt="" />
          </div>
          {/* <img src={footer_logo} alt="" /> */}
          <p>I am a MERN Stack developer from, Dholpur Rajasthan</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2023 Piyush Singhal. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Term of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
