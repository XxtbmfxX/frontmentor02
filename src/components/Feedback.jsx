import React from "react";

import Productive from "../images/illustration-stay-productive.png";
import Arrow from "../images/icon-arrow.svg";

const Feedback = () => {
  return (
    <div className="Feedback">
      <img src={Productive} alt="feedback " />
      <div className="Feedback_text">
        <h2>Stay productive, wherever you are</h2>
        <p>
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p>
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <div className="Feedback_link">
          <a href="/">
            See how Fylo works{" "}
            <span>
              <img src={Arrow} alt="" />
            </span>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
