import React from "react";

const Form = () => {
  return (
    <div className="Form">
      <div className="Form_text">
        <h2>Get early access today</h2>
        <p>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <div className="Form_submit">
        <form action="/">
          <input type="text" name="email" placeholder="email@example.com" />
          <button type="submit">Get Started For Free </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
