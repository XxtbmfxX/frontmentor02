import React from "react";

import BgQuotes from "../images/bg-quotes.png";
import User1 from "../images/profile-1.jpg";
import User2 from "../images/profile-2.jpg";
import User3 from "../images/profile-3.jpg";

const Opinions = () => {
  return (
    <div className="Opinions">
      <img src={BgQuotes} alt="" className="Opinions_quotes" />

      <div className="Opinions_element">
        <div className="Opinions_element-text">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
        </div>
        <div className="Opinions_element-user">
          <img src={User1} alt="user" />
          <div className="Opinions_element-user-text">
            <div className="Opinions_element-user-text">
              <h3> Bruce MCKenxie</h3>
              <span>Founder & CEO, Huddle</span>
            </div>
          </div>
        </div>
      </div>
      <div className="Opinions_element">
        <div className="Opinions_element-text">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
        </div>
        <div className="Opinions_element-user">
          <img src={User2} alt="user" />
          <div className="Opinions_element-user-text">
            <h3> Iva Boyd</h3>
            <span>Founder & CEO, Huddle</span>
          </div>
        </div>
      </div>
      <div className="Opinions_element">
        <div className="Opinions_element-text">
          <p>
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
        </div>
        <div className="Opinions_element-user">
          <img src={User3} alt="user" />
          <div className="Opinions_element-user-text">
            <h3> Satish Patel</h3>
            <span>Founder & CEO, Huddle</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opinions;
