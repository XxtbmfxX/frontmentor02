import React from "react";

import Logo from "../images/logo.svg";

const Header = () => {
  return (
    <div className="Header">
      <img src={Logo} alt="fylo logo" />
      <div className="Header_options">
        <span>Features</span>
        <span>Team</span>
        <span>Sing in</span>
      </div>
    </div>
  );
};

export default Header;
