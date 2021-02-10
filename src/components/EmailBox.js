import React from "react";

const EmailBox = () => {
  return (
    <div className="contact-us">
      <div className="contact-us-question">Want us to contact you?</div>
      <div className="contact-us-email">
        <input
          type="email"
          name="Email"
          className="email"
          placeholder="Email"
        />
        <button>Join</button>
      </div>
    </div>
  );
};

export default EmailBox;
