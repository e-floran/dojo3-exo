import React from "react";
import PreviewHeader from "./PreviewHeader";
import PreviewBody from "./PreviewBody.jsx";

function Preview(props) {
  return (
    <div id="main" className="pure-u-1">
      <PreviewHeader />
      <PreviewBody />
    </div>
  );
}
export default Preview;
