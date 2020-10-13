import React from "react";
import EmailContentHeader from "./EmailContentHeader";
import EmailContentBody from "./EmailContentBody.jsx";

function EmailContent(props) {
  return (
    <div id="main" className="pure-u-1">
    <div className="email-content">
      <EmailContentHeader />
      <EmailContentBody />
    </div>
    </div>
  );
}
export default EmailContent;
