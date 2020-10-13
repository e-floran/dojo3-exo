import React from "react";
import EmailContentTitle from "./EmailContentTitle";
import EmailContentControls from "./EmailContentControls";

function EmailContentHeader(props) {
  return (
    <div className="email-content-header pure-g">
      <React.StrictMode>
        <EmailContentTitle />
        <EmailContentControls />
      </React.StrictMode>
    </div>
  );
}

export default EmailContentHeader;
