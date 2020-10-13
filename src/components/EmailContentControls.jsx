import React from "react";

function EmailContentControls(props) {
  return (
    <div className="email-content-controls pure-u-1-2">
      <button className="secondary-button pure-button">Reply</button>
      <button className="secondary-button pure-button">Forward</button>
      <button className="secondary-button pure-button">Move to</button>
    </div>
  );
}

export default EmailContentControls;
