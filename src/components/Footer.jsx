import React from "react";

import Logo from "../images/logo.svg";
import Location from "../images/icon-location.svg";
import Phone from "../images/icon-phone.svg";
import Email from "../images/icon-email.svg";

import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";
import Twitter from "../images/twitter.png";

const Footer = () => {
  return (
    <div className="Footer">
      <img id="logo-footer" src={Logo} alt="fylo logo" />
      <div className="Footer_info">
        <ul>
          <li id="location-footer">
            <img src={Location} alt="location" />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua{" "}
          </li>
          <li className="phone-email">
            <img src={Phone} alt="phone" /> +1-543-123-4567
          </li>
          <li className="phone-email">
            {" "}
            <img src={Email} alt="email" />
            example@fylo.com
          </li>
        </ul>
      </div>
      <div className="Footer_aboutUS">
        <ul>
          <li>About Us</li>
          <li>
            {" "}
            <a href="/">Jobs</a>
          </li>
          <li>
            {" "}
            <a href="/">Press</a>
          </li>
          <li>
            {" "}
            <a href="/">Blog</a>
          </li>
        </ul>
      </div>
      <div className="Footer_contactUS">
        <ul>
          <li>Contact Us</li>
          <li>
            <a href="/">Terms</a>
          </li>
          <li>
            <a href="/">Privacy</a>
          </li>
        </ul>
      </div>
      <div className="Footer_socialMedia">
        <ul>
          <li>
            <a href="/">
              <img src={Facebook} alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={Twitter} alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={Instagram} alt="Instagram" />
            </a>
          </li>
        </ul>
      </div>
      <div className="atributtion">
        <p>
          Challenge by{" "}
          <a
            rel="noreferrer"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by <a href="https://github.com/XxtbmfxX">A. Toro</a>.
        </p>
      </div>
    </div>
  );
};

export default Footer;
