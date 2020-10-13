import React from "react";
import EmailContentTitle from "./EmailContentTitle";
import EmailContentControls from "./EmailContentControls";

function EmailContentHeader(props) {
  return (
    <div className="email-content-header pure-g">
      <React.StrictMode>
        <EmailContentTitle mailTitle="Hello from Toronto" author="Tilo Mitra" date="4:34pm, October 13, 2020"/>
        <EmailContentControls />
      </React.StrictMode>
    </div>
  );
}

export default EmailContentHeader;
