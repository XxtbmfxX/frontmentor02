import React from "react";

import Access from "../images/icon-access-anywhere.svg";
import Security from "../images/icon-security.svg";
import RealTime from "../images/icon-collaboration.svg";
import StoreFile from "../images/icon-any-file.svg";

const Options = () => {
  return (
    <div className="Options">
      <div className="Options_element">
        <img src={Access} alt="access" />
        <div className="Options_element-text">
          <h2>Access your files, anywhere</h2>
          <p>
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
      </div>
      <div className="Options_element">
        <img src={Security} alt="security" />
        <div className="Options_element-text">
          <h2>Security you can trust</h2>
          <p>
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>
      </div>
      <div className="Options_element">
        <img src={RealTime} alt="real time" />
        <div className="Options_element-text">
          <h2> Real-time collaboration </h2>
          <p>
            Securely share filesand folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
        </div>
      </div>
      <div className="Options_element">
        <img src={StoreFile} alt="" />
        <div className="Options_element-text">
          <h2>Store any type of file</h2>
          <p>
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Options;
