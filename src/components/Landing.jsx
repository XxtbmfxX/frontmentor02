import React from "react";

import IntroIlustration from "../images/illustration-intro.png";

const Landing = () => {
  return (
    <div className="Landing">
      <img src={IntroIlustration} alt="logo landing" />
      <div className="Landing_text">
        <h1>All your files in one secure location, accessible anywhere.</h1>

        <p>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
      </div>
      <button>Get Started</button>
    </div>
  );
};

export default Landing;
